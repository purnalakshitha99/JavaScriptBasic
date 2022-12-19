const courses =[
    { id : 1 , name : 'a'},
    { id : 2 , name : 'b'},
];


const newcourse = courses.findIndex( newcourse => newcourse.name === 'a');

console.log(newcourse);