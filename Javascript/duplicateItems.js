const array = [1, 2, 3,33,4, 5, 1, 2, 3];
const temp = {};
array.forEach(a => {
    temp[a]=(temp[a]||0)+1;
});

document.getElementById('output').innerText = "Duplicate Count values in array: " + JSON.stringify(temp);


const res=array.reduce((acc,item)=>{
 acc[item]=(acc[item]||0)+1;
 return acc
},{});
console.log("res:",res);

//using Set removed duplicate items
console.log("Removed duplicate",[...new Set(array)]);

///normal for loop
var temp1={};
for(var i=0;i<array.length;i++){
    val=array[i];
    temp1[val]=(temp1[val]||0)+1
}
console.log("Normal for loop count of duplicate",temp1);