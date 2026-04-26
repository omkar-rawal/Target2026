// Find first repeating character
// 👉 Input: "abca" → Output: "a"

const str='abca';

temp={};

for(i of str){
    temp[i]=(temp[i]||0)+1;
}

for(char of str){
    if(temp[char]>1){
        console.log(char)
        break
    }
}