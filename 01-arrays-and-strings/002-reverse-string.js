const input = "Hello";

const reverseString = (str) =>{
    const strArr = str.split("");
    for(let i =0; i < strArr.length / 2; i++){
        let firstValue = strArr[i];

        strArr[i] = strArr[strArr.length - 1 - i];
        strArr[strArr.length - 1 - i] = firstValue;
    }
    return strArr.join("");
}

console.log("reversed string", reverseString(input))