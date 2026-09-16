import json

log_path = 'C:/Users/gillm/.gemini/antigravity/brain/53bba348-2fa5-46ac-9b1f-8710d181f81e/.system_generated/logs/transcript.jsonl'
keywords = ['18.05.05', '18.05.41', '18.06.10 (2)']

with open(log_path, 'r', encoding='utf-8') as f:
    for line_num, line in enumerate(f, 1):
        # We only care about steps before the current turn (line 915)
        if line_num >= 915:
            break
        try:
            data = json.loads(line)
            content = str(data.get('content', ''))
            tool_calls = str(data.get('tool_calls', ''))
            text = content + " | " + tool_calls
            for kw in keywords:
                if kw in text:
                    print(f"==================== LINE {line_num} ====================")
                    print(f"Type: {data.get('type')}, Source: {data.get('source')}")
                    print(f"Content:\n{content[:1500]}")
                    if len(content) > 1500:
                        print("... [TRUNCATED] ...")
                    print("=========================================================\n")
                    break
        except Exception as e:
            pass
