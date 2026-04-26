// Reverse a string
// 👉 Input: "hello" → Output: "olleh"
const str="madam india";
const reversedStr=str.split('').reverse().join('');
const res =(str==reversedStr) ? "Pal" : "Not Pal";
console.log(res);

temp='';
for(var i=str.length-1;i>=0;i--){
    temp+=str[i];
}
console.log((temp==str)?"Pal":"Not Pal");


