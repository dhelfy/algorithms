let array = [10, -1, 7, 19, 9, 1, 3, -4, 111, 110, 17, 15, 11]
let counter = 0

const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            counter++
            if (arr[j] > arr[j+1]) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }

    return arr
}

console.log(bubbleSort(array))
console.log(counter)