/////////////call()/////////////////////
const P1={ name:"ABC"};
const P2={ name:"PQR"};
//passing arguments in the comma seperate....
function getInfo(age,city){
    console.log("Person Info P1:",`Name:${this.name} Age:${age} City:${city}`);
}
getInfo.call(P1,25,"Pune");
getInfo.call(P2,30,"Kolhapur");
//////////////apply()/////////////////////
const A1={ name:"ABC"};
const A2={ name:"PQR"};

function getApplyInfo(age,city){
    console.log(`Apply Operation Name: ${this.name} Age: ${age} City: ${city}`);
}
//same like call but passing arguments in the array....
getApplyInfo.apply(A1,[20,"Pune1"]); 
getApplyInfo.apply(A2,[22,"Pune12"]);
//////////////bind()/////////////////////
const B1={ name:"ABC"};
const B2={ name:"PQR"};
function getInfoBind(age,city){
    console.log(`Get info for Bind:: Name: ${this.name} Age:${age} City:${city}`);
}

const resB1=getInfoBind.bind(B1,10,"Pune");
resB1();
const resB2=getInfoBind.bind(B2,20,"Mumbai");
resB2();