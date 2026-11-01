// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

 

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.

const nums1 = [4,9,5];
const nums2 = [9,4,9,8,4];

const intersection = (nums1, nums2) =>{
    const setOfNums1 = new Map();
    const matches = new Map();

    for (let i = 0; i < nums1.length; i++){
        setOfNums1.set(nums1[i], i);
    }

    for (let j = 0; j < nums2.length; j++){
        if(setOfNums1.has(nums2[j])){
            matches.set(nums2[j], j)
        }
    }

    return Array.from(matches.keys())
}