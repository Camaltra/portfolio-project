
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

parenthesesString = "([({((((((((((()))))))))))})])"

try:
    if (validParenthesesChecker(parenthesesString) == validParentheses(parenthesesString)):
        print('OK')
    else:
        print("NotOK")
except Exception:
    print('NotOK')