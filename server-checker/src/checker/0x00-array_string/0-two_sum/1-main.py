
def twoSumChecker(nums, target):
    dictOfNum = {}
    for i, value in enumerate(nums):
        diff = target - value
        if diff in dictOfNum:
            return [i, dictOfNum[diff]]
        dictOfNum[nums[i]] = i

nums = []
target = 2

if (twoSumChecker(nums, target) == twoSum(nums, target)):
    print('OK')
else:
    print('NotOK')
