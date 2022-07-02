
def validParenthesesChecker(parenthesesString):
    stack = []
    mapping = {")": "(", "}": "{", "]": "["}
    for char in parenthesesString:
        if char in mapping:
            top_element = stack.pop() if stack else '#'
            if mapping[char] != top_element:
                return False
        else:
            stack.append(char)
    return True

parenthesesString = "(({}))([)]"

try:
    resultStudent = validParentheses(parenthesesString)
    resultChecker = validParenthesesChecker(parenthesesString)
    if (resultChecker == resultStudent):
        print('OK')
    else:
        print(f'Got: {resultStudent} Expected: {resultChecker}')
except Exception:
    print('Function not found | Error typo or return in the function')
