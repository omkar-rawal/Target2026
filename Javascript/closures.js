function bank(initiate){
    var balance=initiate;
    return {
        deposit(amount){
        console.log("deposit Balance:",balance+=amount);
        },
        withdrawal(amount){
        console.log("withdrawal Balance:",balance-=amount);
        }
    }
}

var amt=bank(1000);
amt.deposit(500);
amt.withdrawal(300);


function outer(){
    let count=0;
    function inner(){
        count++;
        console.log("count::",count);
    }
    console.log("test")
    return inner;
}

var countData=outer();
countData();
countData();
countData();
countData();
countData();