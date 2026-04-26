
// Find first non-repeating character
// 👉 Input: "aabbcdd" → Output: "c"
const temp={};
const str="aabbzcdd";
for(i of str){
   temp[i]=(temp[i]||0)+1;
}

for(char of str){
    if(temp[char]===1){
        console.log(char)
    }
}