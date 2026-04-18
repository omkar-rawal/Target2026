const arr=[1,2,3,4,6,7,8,9,10];
const temp=[];
for(var i=1;i<=10;i++){
    console.log("test",temp.push(i));
   !arr.includes(i) ? arr.push(i) : arr;
}
console.log(arr.sort((a,b)=>a-b))