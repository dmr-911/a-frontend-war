// Given an integer array of size n, find all elements that appear more than ⌊n / 3⌋ times.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: [3]
// Example 2:

// Input: nums = [1]
// Output: [1]
// Example 3:

// Input: nums = [1,2]
// Output: [1,2]
 

// Constraints:

// 1 <= nums.length <= 5 * 104
// -109 <= nums[i] <= 109
 

// Follow up: Could you solve the problem in linear time and in O(1) space?


// Solution 1 : moore's algo 
const majorityElements = (nums) =>{
    if(nums.length === 0) return [];
    const majority = nums.length / 3;

    let major1 = null;
    let major2 = null;

    let count1 = 0;
    let count2 = 0;

    for(const num of nums){
        if(num === major1){
            count1++;
        }else if(num === major2){
            count2++;
        }
       else if(count1 === 0){
            major1 = num;
            count1 = 1;
        }else if (count2 === 0){
            major2 = num;
            count2 = 1;
        }else{
            count1--;
            count2--;
        }
    };

    let occur1 = 0;
    let occur2 = 0;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] === major1){
            occur1++
        }else if(nums[i] === major2){
            occur2++;
        }
    }

    const elements = [];

    if(occur1 > majority) elements.push(major1);
    if(occur2 > majority) elements.push(major2);

    return elements;

};


console.log(majorityElements([1, 1, 2, 2, 3]))