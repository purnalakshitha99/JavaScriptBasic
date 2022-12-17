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

function createCircle(radius){
    return { 
        radius,
        
        draw(){
            console.log('draw');
        }
    };
}


const circle1 = createCircle(1);
console.log(circle1);
circle1.draw();

const circle2 = createCircle(2);
console.log(circle2);
console.log(circle2.draw);

