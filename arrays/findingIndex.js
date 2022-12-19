const number = [1,2,3,,1,4];

console.log(number.indexOf('43'));//meke nathi ekak dammoth -1 lesa output ei nattn adala index eka ei
console.log(number.lastIndexOf(1));//meke anthimata thiyana 1 hi index eka 



console.log(number.indexOf(9)!== -1);//array eke nati ekak dammoth false we

console.log(number.includes(9));//uda ekama thama array eke nathi ekak dammoth false we thiyan ekk dammoth true we


console.log(number.indexOf(1,2))//1 thiyan dewani thane index number eka ei
