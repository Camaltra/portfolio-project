
def maxSumSubarrayChecker(nums):
    maxSum = nums[0]
    maxCurrentSum = 0
    for i in range(len(nums)):
        maxCurrentSum = max(nums[i], maxCurrentSum + nums[i])
        maxSum = max(maxCurrentSum, maxSum)
    return maxSum

nums = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -20, 20, -30, 1, 1, 1, 1, 1, 1, 1, 1, 16, 1, 1, 1, 1, 1, 1, 1, 1, 1]

try:
    if (maxSumSubarrayChecker(nums) ==  maxSumSubarray(nums)):
        print('OK')
    else:
        print("NotOK")
except Exception:
    print('NotOK')