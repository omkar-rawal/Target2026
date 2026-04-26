// Check if two strings are anagrams
// 👉 Input: "listen", "silent" → Output: true


const str="listen";
const compareStr="silent";
console.log(str.split('').sort().join('')==compareStr.split('').sort().join(''))
console.log(str.split('').sort().join(''));
console.log(compareStr.split('').sort().join(''));