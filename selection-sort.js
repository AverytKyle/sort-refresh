// 1. Set MIN to location 0.
// 2. Search the minimum element in the list.
// 3. Swap with value at location MIN.
// 4. Increment MIN to point to next element.
// 5. Repeat until list is sorted.

function selectionSort(arr) {
    let min
    for (let i = 0; i < arr.length; i++) {
        min = i

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }

        if (min != i) {
            [arr[min], arr[i]] = [arr[i], arr[min]]
        }

    } return arr
}

let arr = [5, 6, 1, 8, 3, 9]

console.log(selectionSort(arr))