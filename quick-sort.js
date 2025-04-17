const arr = [10, -1, 7, 19, 9, 1, 3, -4, 111, 110, 17, 15, 11]
let counter = 0

const quickSort = (arr) => {
    if (arr.length < 2) {
        return arr
    } else if (arr.length === 2) {
        if (arr[0] > arr[1]) {
            let temp = arr[0]
            arr[0] = arr[1]
            arr[1] = temp
        }

        return arr
    } else {
        let pivotIndex = Math.floor((arr.length - 1) / 2)
        let less = []
        let greater = []
        
        for (let i = 0; i < arr.length; i++) {
            counter++
            if (arr[i] === arr[pivotIndex]) {
                continue
            }

            if (arr[i] < arr[pivotIndex]) {
                less.push(arr[i])
            }

            if (arr[i] > arr[pivotIndex]) {
                greater.push(arr[i])
            }
        }

        return [...quickSort(less), arr[pivotIndex], ...quickSort(greater)]
    }
}

console.log(quickSort(arr))
console.log(counter)