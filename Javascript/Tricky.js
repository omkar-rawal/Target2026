var a=10;
var b=30;
var c=5;
console.log(a<b<c) //true

console.log("Null type:",typeof null); //object
console.log("[] type:",typeof []); //object
console.log("{} type:",typeof {}); //object
console.log("[]==={}:",[]=={}); //object
console.log("[]===[]:",[]==[]); //object
console.log("{}{}:",{}=={}); //object

console.log(NaN == NaN); // false
// NaN is never equal to anything (even itself)

const obj = {
    a: 1,
    b: 2,
    sum: function () {
         return this.a + this.b;
         }
};

var fn = obj.sum; //undefined
//var fn = obj.sum.bind(obj);// return res
console.log(fn()); 