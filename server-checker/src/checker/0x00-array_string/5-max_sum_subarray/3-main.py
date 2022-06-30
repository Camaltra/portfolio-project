
def maxSumSubarrayChecker(nums):
    maxSum = nums[0]
    maxCurrentSum = 0
    for i in range(len(nums)):
        maxCurrentSum = max(nums[i], maxCurrentSum + nums[i])
        maxSum = max(maxCurrentSum, maxSum)
    return maxSum

nums = [3, 4, 5, -1, 10, -10, -2, 4,  -3, -10, 3]

try:
    if (maxSumSubarrayChecker(nums) ==  maxSumSubarray(nums)):
        print('OK')
    else:
        print("NotOK")
except Exception:
    print('NotOK')