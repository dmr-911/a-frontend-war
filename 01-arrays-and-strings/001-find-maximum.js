const numbers = [3, 7, 2, 9, 5];

// Time complexity of this function is O(n)
const findMax = (numbers) =>{
    let max = null;

    for (let index = 0; index < numbers.length; index++) {
       if(numbers[index] > max){
        max = numbers[index]
       }
    }

    return max
}

console.log("max number is :" , findMax(numbers))