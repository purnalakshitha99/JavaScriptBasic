const numbers = [1,-1,2,3];

//normal method

// const filtered = numbers.filter(function(value){
//     return value >= 0;
// })



//arrow function
const filtered = numbers.filter(value => value >= 0);  //rina value ekak thibboth eka nathiwa anith ewa print karai

console.log(filtered);