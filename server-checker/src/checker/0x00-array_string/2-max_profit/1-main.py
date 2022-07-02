
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

prices = [1, 2, 3, 6, 1, 2]

try:
    resultStudent = maxProfit(prices)
    resultChecker = maxProfitChecker(prices)
    if (resultChecker == resultStudent):
        print('OK')
    else:
        print(f'Got: {resultStudent} Expected: {resultChecker}')
except Exception:
    print('Function not found | Error typo or return in the function')
