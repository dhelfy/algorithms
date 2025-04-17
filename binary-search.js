const array = [1, 2, 3, 4, 5, 6, 8, 10, 11, 75, 90, 100]

const binary_search = (array, elem) => {
    let left = 0
    let right = array.length - 1
    let mid 
    let found = false
    let position = null
    let counter = 0

    while (found === false && right >= left) {
        mid = Math.floor((left + right) / 2)
        counter = counter + 1

        if (array[mid] === elem) {
            found = true
            position = mid
            return `Алгорит отработал раз: ${counter}; Позиция искомого элемента: ${position}`
        } else if (array[mid] > elem) {
            right = mid - 1
        } else if (array[mid] < elem) {
            left = mid + 1
        }
    }

    return `Алгорит отработал раз: ${counter}; Позиция искомого элемента: ${position}`
}

console.log(binary_search(array, 2))
console.log(binary_search(array, 5))
console.log(binary_search(array, 1))
console.log(binary_search(array, 6))
console.log(binary_search(array, 75))
console.log(binary_search(array, 101))