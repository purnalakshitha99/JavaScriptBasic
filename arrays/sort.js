const numbers = [4,3,2,1];
numbers.sort();//podi eke idan adu ekata

console.log(numbers);

//reverse
const num2 = [1,2,3,4,5];
num2.reverse();
console.log(num2);

const courses = [
    { id:1 ,name:'Node'},
    { id:2 ,name:'js'}
];
courses.sort(function(a,b){
    //a<b => -1;
    //a>b => 1;
    //a === b > 0;

    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if(nameA<nameB) return -1;
    if(nameA>nameB) return 1;
    return 0;
});
console.log(courses);