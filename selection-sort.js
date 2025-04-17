let array = [10, -1, 7, 19, 9, 1, 3, -4, 111, 110, 17, 15, 11]

const selectionSort = (array) => {
    let minElemIndex = 0
    let counter = 0

    for(let i = 0; i < array.length; i++) {
        minElemIndex = i
        for (let j = i+1; j < array.length; j++) {
            if (array[j] < array[minElemIndex]) {
                minElemIndex = j
            }
            counter++
        }

        [array[minElemIndex], array[i]] = [array[i], array[minElemIndex]];
    }

    return `[${array}], алгоритм отработал раз: ${counter}`
}

console.log(selectionSort(array))