import os
import hashlib
import shutil

# Files mapping
mapping = {
    'lobby_starter_original.jpg': 'WhatsApp Image 2026-05-31 at 18.06.08.jpeg',
    'lobby_pos1_f_original.jpg': 'WhatsApp Image 2026-05-31 at 18.06.09.jpeg',
    'lobby_pos1_r_original.jpg': 'WhatsApp Image 2026-05-31 at 18.06.09 (1).jpeg',
    'lobby_pos1_l_original.jpg': 'WhatsApp Image 2026-05-31 at 18.06.09 (2).jpeg',
    'lobby_pos2_r_original.jpg': 'WhatsApp Image 2026-05-31 at 18.06.10.jpeg',
    'lobby_pos2_l_original.jpg': 'WhatsApp Image 2026-05-31 at 18.06.10 (1).jpeg',
    'lobby_pos2_b_original.jpg': 'WhatsApp Image 2026-05-31 at 18.06.10 (2).jpeg',
    'lobby_pos1_b_original.jpg': 'WhatsApp Image 2026-05-31 at 18.06.11.jpeg'
}

def get_md5(path):
    if not os.path.exists(path):
        return None
    hasher = hashlib.md5()
    with open(path, 'rb') as f:
        buf = f.read()
        hasher.update(buf)
    return hasher.hexdigest()

folder = 'c:/Users/gillm/OneDrive/Documents/Claude/Projects/InteriorDesign/images/lobby'

print("Auditing image mappings...")
for target, source in mapping.items():
    target_path = os.path.join(folder, target)
    source_path = os.path.join(folder, source)
    
    target_hash = get_md5(target_path)
    source_hash = get_md5(source_path)
    
    print(f"Target: {target} | Source: {source}")
    print(f"  Target Hash: {target_hash}")
    print(f"  Source Hash: {source_hash}")
    
    if target_hash != source_hash:
        print("  [MISMATCH] Synchronizing file...")
        shutil.copy2(source_path, target_path)
        print("  [SUCCESS] Synchronized!")
    else:
        print("  [OK] Hashes match.")
