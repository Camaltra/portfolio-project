
def isAnagramChecker(str1, str2):
    dictLetters = {}
    for i in range(len(str1)):
        if str1[i] not in dictLetters:
            dictLetters[str1[i]] = 1
        else:
            dictLetters[str1[i]] += 1
    for j in range(len(str2)):
        if str2[j] not in dictLetters or dictLetters[str2[j]] == 0:
            return  False
        else:
            dictLetters[str2[j]] -= 1
    for value in dictLetters.values():
        if value > 0:
            return False
    return True

str1 = "sdkfdhjkfgjdsghjzegrghfujdisghusigropgtejrriohgtaepioghreghughoerpagbnjfe"
str2 = "fdskfnhjksdgfbhrje"

try:
    resultStudent = isAnagram(str1, str2)
    resultChecker = isAnagramChecker(str1, str2)
    if (resultChecker == resultStudent):
        print('OK')
    else:
        print(f'Got: {resultStudent} Expected: {resultChecker}')
except Exception:
    print('Function not found | Error typo or return in the function')
