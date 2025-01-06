function firstUniqChar(s) {
    const freq = {};

    for (let char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }
    for (let i = 0; i < s.length; i++) {
        if (freq[s[i]] === 1) {
            return s[i];
        }
    }

    return -1;
}

const s = "leetcode";
console.log(firstUniqChar(s)); 
