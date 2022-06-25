
def containsDuplicateChecker(nums):
    alreadyVisitedNumber = {}
    for num in nums:
        if num in alreadyVisitedNumber:
            return True
        else:
            alreadyVisitedNumber[num] = True
    return False

nums = [1, 1, 1, 1, 1, 1]

try:
    if (containsDuplicateChecker(nums) == containsDuplicate(nums)):
        print('OK')
    else:
        print('NotOK')
except Exception:
    print('NotOK')
