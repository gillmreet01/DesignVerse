import json

log_path = 'C:/Users/gillm/.gemini/antigravity/brain/53bba348-2fa5-46ac-9b1f-8710d181f81e/.system_generated/logs/transcript.jsonl'

with open(log_path, 'r', encoding='utf-8') as f:
    for line_num, line in enumerate(f, 1):
        try:
            data = json.loads(line)
            content = str(data.get('content', ''))
            tool_calls = str(data.get('tool_calls', ''))
            text = content + " | " + tool_calls
            if '18.05.05' in text or '18.05.06' in text or '18.05.41' in text or '18.05.42' in text:
                print(f"==================== LINE {line_num} ====================")
                print(f"Type: {data.get('type')}, Source: {data.get('source')}")
                if data.get('source') == 'USER_EXPLICIT':
                    print(f"User Message: {content[:1000]}")
                elif data.get('tool_calls'):
                    print(f"Tool calls: {str(data.get('tool_calls'))[:1000]}")
                else:
                    print(f"Model Content: {content[:1000]}")
                print("=========================================================\n")
        except Exception as e:
            pass
