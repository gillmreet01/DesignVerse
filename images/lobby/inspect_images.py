import os
from PIL import Image

def inspect_folder(folder_path):
    print(f"Folder: {folder_path}")
    files = [f for f in os.listdir(folder_path) if f.lower().endswith(('.jpg', '.jpeg', '.png'))]
    for f in sorted(files):
        path = os.path.join(folder_path, f)
        img = Image.open(path)
        print(f"  File: {f}")
        print(f"    Format: {img.format}, Size: {img.size}, Mode: {img.mode}")
        # Compute a very basic signature (average pixel color)
        # Resize to 1x1 to get average color
        img_small = img.resize((1, 1))
        avg_color = img_small.getpixel((0, 0))
        print(f"    Avg Color: {avg_color}")

inspect_folder('c:/Users/gillm/OneDrive/Documents/Claude/Projects/InteriorDesign/images/bedroom')
inspect_folder('c:/Users/gillm/OneDrive/Documents/Claude/Projects/InteriorDesign/images/drawing')
