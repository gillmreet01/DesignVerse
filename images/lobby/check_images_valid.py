import os
from PIL import Image

nodes = [
    "lobby_starter",
    "lobby_pos1_f",
    "lobby_pos1_r",
    "lobby_pos1_l",
    "lobby_pos2_r",
    "lobby_pos2_l",
    "lobby_pos2_b",
    "lobby_pos1_b",
    "lobby_pos2_f",
    "bed_pos0_f",
    "bed_pos1_f",
    "bed_pos1_r",
    "bed_pos1_l",
    "bed_pos1_b",
    "draw_pos0_f",
    "draw_pos1_f",
    "draw_pos1_r",
    "draw_pos1_l",
    "draw_pos1_b"
]

levels = ["original", "level1", "level2", "minimal", "moderate", "complete"]

folder = 'c:/Users/gillm/OneDrive/Documents/Claude/Projects/InteriorDesign/images/lobby'

print("Verifying image files integrity...")
corrupt_files = 0
missing_files = 0

for node in nodes:
    for lvl in levels:
        # Determine expected filename
        if lvl == 'original':
            filename = f"{node}_original.jpg"
        else:
            filename = f"{node}_{lvl}.webp"
            
        path = os.path.join(folder, filename)
        if not os.path.exists(path):
            print(f"  [MISSING] {filename}")
            missing_files += 1
            continue
            
        try:
            with Image.open(path) as img:
                img.verify()
            # Try to load and process a small thumbnail to fully verify decoding
            with Image.open(path) as img:
                img.resize((10, 10))
            print(f"  [OK] {filename} (Size: {os.path.getsize(path)} bytes)")
        except Exception as e:
            print(f"  [CORRUPT] {filename} | Error: {e}")
            corrupt_files += 1

print(f"\nVerification complete. Missing: {missing_files}, Corrupt: {corrupt_files}")
