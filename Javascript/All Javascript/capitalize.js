// Convert string to title case
// 👉 Input: "hello world" → Output: "Hello World"


const str="hello world";
console.log(str.split(' ').map(w=>w.charAt(0).toUpperCase()+w.slice(1)).join(' '))