function pal(args){
    var temp = '';

    for (let a of args) {
        temp = a + temp;  // build reverse string
    }

    return (args === temp) ? `${args} is palindrom`:`${args} not palindrom`;
}

console.log(pal("madam")); // true

function pal2(str){
const reveserStr=str.split('').reverse().join('');
return reveserStr==str ? `${str} is palindrom.`:`${str} not palindrom.`;
}
console.log("Pal2:",pal2("madam"))



function palWithForLoop(str){
    var checkTemp='';
    for(var i=str.length-1;i>=0;i--){   
        checkTemp+=str[i];
    }
    return checkTemp===str;
}
console.log("palWithForLoop:",palWithForLoop("madffam"))