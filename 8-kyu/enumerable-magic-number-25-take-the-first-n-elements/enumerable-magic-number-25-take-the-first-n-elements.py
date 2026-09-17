def take(arr, n):
    array = []
    if n < 0:
        return "Enter non-negative integer"
​
    if len(arr) == 0 and n >= 0:
        return arr
    else:
        for i in range(min(n, len(arr))):
            array.append(arr[i])
​
    return array