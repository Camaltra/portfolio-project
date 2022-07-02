
def twoSumChecker(nums, target):
    dictOfNum = {}
    for i, value in enumerate(nums):
        diff = target - value
        if diff in dictOfNum:
            return [i, dictOfNum[diff]]
        dictOfNum[nums[i]] = i

nums = [4, 4, 5, 9, 2, 2]
target = 6

try:
    resultStudent = twoSum(nums, target)
    resultChecker = twoSumChecker(nums, target)
    if (resultChecker == resultStudent):
        print('OK')
    else:
        print(f'Got: {resultStudent} Expected: {resultChecker}')
except Exception:
    print('Function not found | Error typo or return in the function')
