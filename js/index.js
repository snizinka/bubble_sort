const array = [0, 3, 2, 10, 1, 4, -6, 8, 3];

function bubble_sort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(array[j + 1] < array[j]) {
                let temp = array[j + 1]
                array[j + 1] = array[j]
                array[j] = temp;
            }
        }
    }

    return array;
}

console.log(bubble_sort(array));