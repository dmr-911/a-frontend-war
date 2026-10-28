const input = [2, 4, 6];

const sum = (numbers) =>{
    return numbers.reduce((previousValue =0, currentValue) => previousValue + currentValue)
}

console.log("sum of inputs is : ", sum(input))


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    for(let i =1; i < nums.length; i++){
        nums[i] = nums[i] + nums[i-1]
    }
    return nums;
};