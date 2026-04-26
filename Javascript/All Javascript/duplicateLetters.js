// Remove duplicate characters from string
// 👉 Input: "aabbcc" → Output: "abc"
const dup="aabbcc";
console.log([...new Set(dup)].join(''));


temp='';
str="aabbcc";
for(i of str){
    const val=i.toLowerCase()
    //console.log(val)
    if(!temp.includes(val)){
        temp+=val;
    }
}

console.log(temp);