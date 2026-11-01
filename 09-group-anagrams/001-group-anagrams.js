// Practice: Group strings that contain the same characters.
// Solution approach: Create a canonical key for each word, such as its sorted characters, and store words in a map keyed by that signature.
// Example: ["eat","tea","tan","ate"] produces groups containing eat, tea, and ate, plus a separate group for tan.

const strs= ["eat","tea","tan","ate"];
const groupAnagrams = (strs) =>{
    const groups = new Map();
    for(const str of strs){
        const sortedStr = str.split("").sort().join("");
        if(groups.has(sortedStr)){
            groups.get(sortedStr).push(str)
        }else{
            groups.set(sortedStr, [str])
        }
    }

    return Array.from(groups.values());
}

console.log(groupAnagrams(strs))