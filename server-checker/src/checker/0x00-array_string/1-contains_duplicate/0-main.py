
def containsDuplicateChecker(nums):
    alreadyVisitedNumber = {}
    for num in nums:
        if num in alreadyVisitedNumber:
            return True
        else:
            alreadyVisitedNumber[num] = True
    return False

nums = []

try:
    resultStudent = containsDuplicate(nums)
    resultChecker = containsDuplicateChecker(nums)
    if (resultChecker == resultStudent):
        print('OK')
    else:
        print(f'Got: {resultStudent} Expected: {resultChecker}')
except Exception:
    print('Function not found | Error typo or return in the function')
