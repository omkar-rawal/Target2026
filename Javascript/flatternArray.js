//Flattern array:
const arr=[1,[2,3],[4,[5,6]],7,[],[7,6,4,4,[3],6,4[3,[4,[5,[6]]]]]];
console.log(arr.flat(Infinity));


var flatArray=(arr)=>{
return arr.reduce((acc,index)=>{
    return acc.concat(Array.isArray(index)?flatArray(index):index);
},[]);
}
console.log(flatArray(arr));