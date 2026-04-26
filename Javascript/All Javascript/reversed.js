// Reverse a string
// 👉 Input: "hello" → Output: "olleh"
const str="hello india";
console.log(str.split('').reverse().join(''));

temp='';
for(var i=str.length-1;i>=0;i--){
    temp+=str[i];
}

console.log(temp)

console.log(str.split(' ').map((w)=>w.split('').reverse().join('')).join(' '));

