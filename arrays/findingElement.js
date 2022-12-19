
const courses = [
{ id : 1 , name : 'a'},
{ id : 3 , name : 'c'},
]; 


const course = courses.find(function(course) {//find dala thiyeddi adala value ekai key ekai dekama pennai methanata findIndex dammoth adala index gani
    return course.name === 'd'//meke undefined lesa labe mkd value ekak na 'd' walin  //meke course.findIndex thibbnm balana eke 'd' value ekk nathi nisa -1 lesa labe
});

console.log(course);
//console.log(course.includes({ id:4, name : 'r '}));



const newcourse = courses.findIndex(function(newcourse){
    return newcourse.name === 'dd'
})

console.log(newcourse);