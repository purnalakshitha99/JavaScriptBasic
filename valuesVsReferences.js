let x = 10;
let y = x;

x = 20;
console.log(x);
console.log(y);//independent(swadeena)



let a = { value:10}
let b = a;

a.value = 20;

console.log(b);//object ekak hadala values change karaddi dekema chanage wenawa dipendent


//function

number = {values:10}

function increase(number){
    number.values ++;
}

increase(number);

console.log(number);
