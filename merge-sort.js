// 1. Check if the input is length 1 or less.
// 2. If so, it's already sorted: return.
// 3. Divide the array in half.
// 4. Recursively sort the left half.
// 5. Recursively sort the right half.
// 6. Merge the halves together and return.

function mergeSort(arr) {
    if (arr.length <= 1) return arr

    let left = mergeSort(arr.slice(0, arr.length / 2))
    let right = mergeSort(arr.slice(arr.length / 2, arr.length))

    return mergeArr(left, right)
}


// 1. Create an empty return array.
// 2. Point to the first value of each array.
// 3. While there are still values in each array:
// 4. Compare the first values of each array.
// 5. Add the smaller value to the return array.
// 6. Move the pointer to the next value in that array.
// 7. Return the return array.

function mergeArr(left, right) {
    let result = []
    
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }

    return [...result, ...left, ...right]
}

let arr = [2, 4, 1, 7, 5, 3, 9, 8]

console.log(mergeSort(arr))