// Find length without using .length
// 👉 Input: "hello" → Output: 5

str='hello';
count=0;

for(i of str){
    var val=i.toLowerCase();
    count++;
}

console.log(count);
