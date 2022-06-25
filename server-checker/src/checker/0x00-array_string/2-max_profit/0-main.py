
def maxProfitChecker(prices):
    if not prices:
        return 0
    heap = []
    maxAllTime = 0
    heap.append(prices[0])
    for i in range(1, len(prices)):
        while(heap and heap[-1] > prices[i]):
            heap.pop(-1)
        heap.append(prices[i])
        maxAllTime = max(heap[-1] - heap[0], maxAllTime)
    return maxAllTime

prices = []

try:
    if (maxProfitChecker(prices) == maxProfit(prices)):
        print('OK')
    else:
        print("NotOK")
except Exception:
    print('NotOK')
