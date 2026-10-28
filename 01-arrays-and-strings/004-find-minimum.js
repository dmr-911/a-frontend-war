const findMinimum = (numbers) =>{
    if(numbers.length === 0) return;
    let minimum = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] < minimum){
            minimum = numbers[i]
        }
    }
    return minimum;
}

console.log(findMinimum([8, 3, 6, 1, 5]))