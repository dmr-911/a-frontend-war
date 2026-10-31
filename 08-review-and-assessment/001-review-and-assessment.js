// 1. Find maximum
// 2. Reverse String
// 3. Two sum
// 3. Running Sum
// 4. Valid anagram
// 5. Find minimum value 
// 6. Contains duplicate
// 7. Best time to buy stocks

// solution of find maximum 
const findMaximum = (numbers) => {
    let maxNumber = -Infinity;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i]
        }
    }

    return maxNumber;
}

// solution of reverse a string
const reverseString = (string) => {
    const newStr = string.split("");
    for (let i = 0; i < Math.floor(newStr.length / 2); i++) {
        let oldValue = newStr[i];

        newStr[i] = newStr[newStr.length - 1 - i]
        newStr[newStr.length - 1 - i] = oldValue;
    }
    return newStr.join("")
}

// solve of two sum - solved with slight help
const twoSum = (nums, target) => {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        let fairgap = target - nums[i];
        if (map.has(fairgap)) {
            return [map.get(fairgap), i]
        }
        map.set(nums[i], i)
    }
}

// solution of running sum of 1D array
const runningSum = (nums) => {
    for (let i = 0; i < nums.length; i++) [
        nums[i] = nums[i] + (nums[i - 1] || 0)
    ]

    return nums;
}

// solution of valid anagram
const isValidAnagram = (s, t) => {
    if (s.length !== t.length);
    const charSet = new Map();
    for (let i = 0; i < s.length; i++) {
        if (charSet.has(s[i])) {
            charSet.set(s[i], charSet.get(s[i]) + 1)
        } else {
            charSet.set(s[i], 1)
        }
    }


    for (let j = 0; j < t.length; j++) {
        if (charSet.get(t[j])) {
            charSet.set(t[j], charSet.get(t[j]) - 1)
        } else {
            return false
        }
    }

    const sum = Array.from(charSet.values()).reduce((prev, curr) => prev + curr);
    console.log(sum)
    if (sum) {
        return false;
    }
    return true;

}


// solution of constain duplicate
const constainDuplicate = (nums) => {
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            return true;
        }

        set.add(nums[i])
    }
}


// solution of Best time to buy stocks - with hints
const prices = [7, 1, 5, 3, 6, 4];

const maxProfit = (prices) => {
    let minPrice= Infinity;
    let profit = 0;
    for (let num of prices) {
        if (minPrice > num) {
            minPrice = num;
        }else{
            profit = Math.max(profit, num - minPrice)
        }
    }

    return profit;
}

console.log(maxProfit(prices))