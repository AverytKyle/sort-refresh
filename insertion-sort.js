// 1. If it is the first element, it is already sorted; return 1.
// 2. Pick next element.
// 3. Compare with all elements in the sorted sub-list.
// 4. Shift all the elements in the sorted sub-list that is greater than the value
//   to be sorted.
// 5. Insert the value.
// 6. Repeat until list is sorted.

function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {
        let curr = arr[i]
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] > curr) {
                arr[j + 1] = arr[j]
                arr[j] = curr
            }
        }
    }
    return arr
}

let arr = [4, 3, 7, 1, 9, 5]
console.log(insertionSort(arr))