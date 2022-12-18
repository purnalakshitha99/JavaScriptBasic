const circle =  {
    radius:1,
    name:'amal',
    draw(){
        console.log('draw');
    }
};
//assign method 1
//another = {};
// for(let key in circle){
//     another[key] = circle[key];
// }



//assign method 2 ;
//const another = Object.assign({colour:'green',game:'cricket'},circle);

//assign method 3;
const another = {...circle}

console.log(another);
//console.log(another.radius);