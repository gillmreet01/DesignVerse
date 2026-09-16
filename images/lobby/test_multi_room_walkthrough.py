import re
import os

app_js_path = 'app.js'
print(f"Analyzing walkthrough graph in {app_js_path}...")

if not os.path.exists(app_js_path):
    print("Error: app.js not found.")
    exit(1)

with open(app_js_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract nodes block using regex
nodes_match = re.search(r'const\s+nodes\s*=\s*(\{.*?\n\s*\});', content, re.DOTALL)
if not nodes_match:
    print("Error: Could not extract 'nodes' object from app.js.")
    exit(1)

nodes_code = nodes_match.group(1)
lines = nodes_code.split('\n')

nodes = {}
current_node = None
in_transitions = False
transitions_block = {}

# Simple state machine to parse nodes and their transitions
for line_num, line in enumerate(lines, 1):
    cleaned = line.strip()
    
    # Ignore comments and empty lines
    if cleaned.startswith('//') or not cleaned:
        continue
        
    # Check for node start: e.g. lobby_pos0_f: { or bed_pos0_f: {
    # Match pattern: alphanumeric_name: {
    node_start_match = re.match(r'^([a-zA-Z0-9_]+)\s*:\s*\{\s*$', cleaned)
    if node_start_match and not in_transitions:
        node_name = node_start_match.group(1)
        # Avoid matching keys like "transitions", "features", "original", etc.
        if node_name not in ['transitions', 'features', 'original', 'level1', 'level2', 'minimal', 'moderate', 'complete']:
            current_node = node_name
            nodes[current_node] = {
                'transitions': {},
                'room': 'lobby' if 'lobby' in current_node else ('bedroom' if 'bed' in current_node else 'drawing'),
                'filePath': None
            }
            continue

    if current_node:
        # Check for filePath or filePrefix definition
        filePath_match = re.match(r'^filePath\s*:\s*["\']([^"\']+)["\']', cleaned)
        if filePath_match:
            nodes[current_node]['filePath'] = filePath_match.group(1)
            
        filePrefix_match = re.match(r'^filePrefix\s*:\s*["\']([^"\']+)["\']', cleaned)
        if filePrefix_match:
            nodes[current_node]['filePrefix'] = filePrefix_match.group(1)
            
        # Check for transitions block start
        if cleaned.startswith('transitions:'):
            in_transitions = True
            continue
            
        if in_transitions:
            if cleaned.startswith('}'):
                in_transitions = False
            else:
                # Parse transition line: e.g. up: "lobby_pos1_f"
                trans_match = re.match(r'^([a-zA-Z0-9_]+)\s*:\s*["\']([^"\']+)["\']', cleaned)
                if trans_match:
                    direction = trans_match.group(1)
                    target = trans_match.group(2)
                    nodes[current_node]['transitions'][direction] = target

print(f"Successfully parsed walkthrough graph with {len(nodes)} nodes.")

errors = 0

# Verification 1: Target validity
print("\n--- Verification 1: Transition Target Validity ---")
for node_id, data in nodes.items():
    for direction, target in data['transitions'].items():
        if target not in nodes:
            print(f"FAIL: Node {node_id} direction '{direction}' points to invalid node '{target}'")
            errors += 1
        else:
            # Check room crossing info
            s_room = data['room']
            t_room = nodes[target]['room']
            if s_room != t_room:
                print(f" INFO: Cross-room transition: {node_id} ({s_room}) -> {target} ({t_room}) via '{direction}'")

# Verification 2: Check cross-room doorway paths
print("\n--- Verification 2: Room Transitions Symmetry ---")
lobby_to_bed = nodes.get('lobby_pos1_l', {}).get('transitions', {}).get('up')
lobby_to_draw = nodes.get('lobby_pos1_r', {}).get('transitions', {}).get('up')

if lobby_to_bed == 'bed_pos0_f':
    print("PASS: lobby_pos1_l Up -> bed_pos0_f (Lobby Left Door -> Bedroom Entrance)")
else:
    print(f"FAIL: lobby_pos1_l Up transition is {lobby_to_bed}, expected 'bed_pos0_f'")
    errors += 1

if lobby_to_draw == 'draw_pos0_f':
    print("PASS: lobby_pos1_r Up -> draw_pos0_f (Lobby Right Door -> Drawing Room Entrance)")
else:
    print(f"FAIL: lobby_pos1_r Up transition is {lobby_to_draw}, expected 'draw_pos0_f'")
    errors += 1

# Confirm lobby_pos2_l entry is removed
lobby_pos2_l_up = nodes.get('lobby_pos2_l', {}).get('transitions', {}).get('up')
if lobby_pos2_l_up is None:
    print("PASS: lobby_pos2_l Up transition is None (room entry removed)")
else:
    print(f"FAIL: lobby_pos2_l Up transition is {lobby_pos2_l_up}, expected None")
    errors += 1

# Confirm lobby_pos2_r entry is removed
lobby_pos2_r_up = nodes.get('lobby_pos2_r', {}).get('transitions', {}).get('up')
if lobby_pos2_r_up is None:
    print("PASS: lobby_pos2_r Up transition is None (room entry removed)")
else:
    print(f"FAIL: lobby_pos2_r Up transition is {lobby_pos2_r_up}, expected None")
    errors += 1

# Check bedroom exits
bed_down = nodes.get('bed_pos0_f', {}).get('transitions', {}).get('down')
bed_uturn = nodes.get('bed_pos0_f', {}).get('transitions', {}).get('uturn')
bed_center_up = nodes.get('bed_pos1_b', {}).get('transitions', {}).get('up')

if bed_down == 'lobby_pos1_l' and bed_uturn == 'lobby_pos1_l' and bed_center_up == 'lobby_pos1_l':
    print("PASS: Bedroom exit links point back to lobby_pos1_l")
else:
    print(f"FAIL: Bedroom exits mismatch. Down: {bed_down}, Uturn: {bed_uturn}, Center Up: {bed_center_up}")
    errors += 1

# Check drawing room exits
draw_down = nodes.get('draw_pos0_f', {}).get('transitions', {}).get('down')
draw_uturn = nodes.get('draw_pos0_f', {}).get('transitions', {}).get('uturn')
draw_center_up = nodes.get('draw_pos1_b', {}).get('transitions', {}).get('up')

if draw_down == 'lobby_pos1_r' and draw_uturn == 'lobby_pos1_r' and draw_center_up == 'lobby_pos1_r':
    print("PASS: Drawing Room exit links point back to lobby_pos1_r")
else:
    print(f"FAIL: Drawing Room exits mismatch. Down: {draw_down}, Uturn: {draw_uturn}, Center Up: {draw_center_up}")
    errors += 1

# Verification 3: Custom room asset checking
print("\n--- Verification 3: Custom Room Asset File Validation ---")
images_checked = 0
for node_id, data in nodes.items():
    if data['room'] in ['bedroom', 'drawing']:
        file_path = data.get('filePath') or (f"{data.get('filePrefix')}_original.jpg" if data.get('filePrefix') else None)
        if not file_path:
            print(f"FAIL: Room node {node_id} has no filePath or filePrefix defined.")
            errors += 1
            continue
        if os.path.exists(file_path):
            print(f"PASS: Asset exists: {file_path}")
            images_checked += 1
        else:
            print(f"FAIL: Asset does not exist: {file_path}")
            errors += 1

print(f"\nVerification finished: {images_checked} custom room assets verified.")
if errors == 0:
    print("\nALL VERIFICATIONS PASSED SUCCESSFULLY! Connected Walkthrough Graph is 100% sound.")
    exit(0)
else:
    print(f"\nVERIFICATION FAILED: {errors} errors found.")
    exit(1)
