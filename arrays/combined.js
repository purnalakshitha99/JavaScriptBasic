//const first = [1,2,3,4,5];
const first = [{ id:10 }]
const second = [6,7,8,9,10];

const combined = first.concat(second);
first[0].id = 30;


const slicing = combined.slice(2,4)//deke idan 4ta yanakan //3,4 

console.log(combined);
console.log(slicing);
