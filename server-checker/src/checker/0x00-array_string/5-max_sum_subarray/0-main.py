
def maxSumSubarrayChecker(nums):
    maxSum = nums[0]
    maxCurrentSum = 0
    for i in range(len(nums)):
        maxCurrentSum = max(nums[i], maxCurrentSum + nums[i])
        maxSum = max(maxCurrentSum, maxSum)
    return maxSum

nums = [1]

try:
    resultStudent = maxSumSubarray(nums)
    resultChecker = maxSumSubarrayChecker(nums)
    if (resultChecker == resultStudent):
        print('OK')
    else:
        print(f'Got: {resultStudent} Expected: {resultChecker}')
except Exception:
    print('Function not found | Error typo or return in the function')
