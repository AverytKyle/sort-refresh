// 1. Choose an element called "the pivot", how that's done is up to the implementation.
// 2. Take two variables to point left and right of the list excluding pivot.
// 3. Left points to the low index.
// 4. Right points to the high index.
// 5. While value at left is less than pivot move right.
// 6. While value at right is greater than pivot move left.
// 7. If both step 5 and step 6 does not match, swap left and right.
// 8. If left ≥ right, the point where they met is new pivot.
// 9. Repeat, recursively calling this for smaller and smaller arrays.

function quickSort(arr) {
    if (arr.length <= 1) return arr

    let pivot = arr[0]
    let leftArr = []
    let rightArr = []

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            leftArr.push(arr[i])
        } else rightArr.push(arr[i])
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]

}

let arr = [1, 2, 7, 9, 4, 6]

console.log(quickSort(arr))