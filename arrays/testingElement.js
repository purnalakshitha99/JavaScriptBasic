const numbers = [1,2,3,-1];

const somePossitive = numbers.some(function(value){  //eka value ekak hari possitive nam true
    return value  >= 0;
})

const allPositive = numbers.every(function(value){//okkoma value tika 0 ta wadi nam true
    return value  >= 0;
})

console.log(somePossitive);
console.log(allPositive);