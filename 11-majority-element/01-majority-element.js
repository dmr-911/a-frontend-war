// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109
// The input is generated such that a majority element will exist in the array.
 

// Follow-up: Could you solve the problem in linear time and in O(1) space?

// Solution 1 : 
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElementSol1 = function(nums) {
        let maj = null;
    let count = 0;
    for(let i = 0 ; i < nums.length; i++){
        if(count === 0){
            maj = nums[i]
            count = 1;
        }else if(nums[i] === maj){
            count++
        }else{
            count--
        }
    }

  let occurance = 0;
  for(const num of nums){
    if(num === maj){
      occurance++;
    }
  }

    return occurance > nums.length /2 ? maj : -1;
};