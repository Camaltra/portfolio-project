
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
    if (twoSumChecker(nums, target) == twoSum(nums, target)):
        print('OK')
    else:
        print('NotOK')
except Exception:
    print('NotOk')
