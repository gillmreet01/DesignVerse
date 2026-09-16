with open('c:/Users/gillm/OneDrive/Documents/Claude/Projects/InteriorDesign/images/lobby/index.css', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for idx, line in enumerate(lines, 1):
    if 'loader' in line or 'spinner' in line:
        print(f"Line {idx}: {line.strip()}")
