with open('c:/Users/gillm/OneDrive/Documents/Claude/Projects/InteriorDesign/images/lobby/index.css', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for idx, line in enumerate(lines, 1):
    if 'slider-outer' in line or 'slider-fg' in line or 'slider-bg' in line or 'wizard-slider' in line:
        print(f"Line {idx}: {line.strip()}")
