let calculateFilteredSum = (array, callback) => {
    let sum = 0;
    for (let i = 0;i<array.length;i++){
        sum+=callback(array[i]);
    }
    return sum;
}

let isEven = (element) => {
    if(element % 2 == 0){
        return element;
    }
    else{
        return 0;
    }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenSum = calculateFilteredSum(numbers, isEven);
console.log("Sum of even array elements:", evenSum); // Output: 30 (2 + 4 + 6 + 8+ 10)