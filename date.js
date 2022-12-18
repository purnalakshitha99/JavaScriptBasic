const now = new Date();
const date1 = new Date('May 11 2o18 09:00');
const date2 = new  Date(2018,4,11,9);

now.setFullYear(2024);

console.log(date1);
console.log(date2);

console.log(now.toDateString());