
def twoSumChecker(nums, target):
    dictOfNum = {}
    for i, value in enumerate(nums):
        diff = target - value
        if diff in dictOfNum:
            return [i, dictOfNum[diff]]
        dictOfNum[nums[i]] = i

nums = [1, 2, 0, 3, 4, 5, 1]
target = 2

try:
    if (twoSumChecker(nums, target) == twoSum(nums, target)):
        print('OK')
    else:
        print('NotOK')
except Exception:
    print('NotOk')
