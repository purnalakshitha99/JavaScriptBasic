let radius = 1;
let x = 1;
let y = 1;

// const circle = { 
//     radius : 1 , 
//     location:{x:1,y:1},
//     isVisible:true,
//     draw:function(){
//         console.log('draw');
//     }
// };


// circle.draw();
// console.log(circle.location);

//next

function createCircle(width){
    return { 
        radius,
        width,
        
        draw(){
            console.log('draw');
        },
        isVisible: true
    };
}


const circle1 = createCircle(1);
console.log(circle1);
circle1.draw();

const circle2 = createCircle(2);
console.log(circle2);
console.log(circle2.draw);

console.log(circle2.isVisible);




//constructor function
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle = new Circle(1);


