// Remove all spaces from string
// 👉 Input: "h e l l o" → Output: "hello"


const str="h e l l o";
console.log(str.split(' ').join(''));
//----------------------------------------

var str="h e l l o";
var temp=''
for(char of str){
    if(char!=' '){
        temp+=char;
    }
}

console.log(temp)