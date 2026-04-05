console.log("Call A:",a); //getting undefined with var
var a=10;
console.log("Res A:",a); //called because declare top of the page

// console.log("Let L:",L);
// let L=10;
// console.log("Res Let ",L);

// console.log("Const C:",C);
// let C=20;
// console.log("Res C :",C);

test(); ///function works  so entire function moving to the top:
function test(){
    var name="test";
    console.log(name);
}
//test1(); //Error can not control access before initilize
const test1=()=>{
    console.log("get function variable name...")
}
test1(); 