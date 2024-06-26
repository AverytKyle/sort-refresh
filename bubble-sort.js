// 1. If the current value is greater than its neighbor to the right
// 2. Swap those values
// 3. If you get to the end of the array and no swaps have occurred, return
// 4. Otherwise, repeat from the beginning

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        isSwapped = false
        
        for (let j = 0; j < arr.length - i - 1; j++){
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp
                isSwapped = true
            }
        } if (!isSwapped) break
    } return arr
}

let arr = [9, 5, 7, 6, 8, 1, 2]

console.log(bubbleSort(arr))