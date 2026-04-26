// Count frequency of each character
// 👉 Input: "aabcc" → Output: { a:2, b:1, c:2 }

// const str='aabcc';

// temp={};

// for(i of str){
//     temp[i]=(temp[i]||0)+1;
// }
// console.log(temp);


const str='aaAAbBBcCCDc@#$^^&&%%1223145';
const temp={};
for(i of str){
    let val=i.toLowerCase();
    //if(!/[a-zA-Z1-9]/.test(val)){ only symbols
    //if(/[a-zA-Z1-9]/.test(val)){ exclude symbols
    if(/[a-zA-Z]/.test(val)){ //only letters
    temp[val]=(temp[val]||0)+1;
    }
}
console.log(temp);
