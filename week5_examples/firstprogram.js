let odd_num = (array) => {
    for(let i = 0; i < array.length; i++){
        if (array[i] % 2 !== 0){
            continue;
        }
        else{
            array.splice(i, 1);
            i--;
        }
    }
    return array;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = odd_num(numbers);
console.log(oddNumbers);