

function max(num1,num2){
    if(num1<num2){
        maxnum = num2;
    }
    else{
        maxnum = num1;
    }
    
    console.log(maxnum);

}

 max(32,43);

 //another method
 function max(num1,num2){
    if(num1<num2){
        maxnum = num2;
    }
    else{
        maxnum = num1;
    }
    
    return maxnum;
   
}

 let x =max(32,38);
 console.log(x);


 //anotheer method 

let num = max(33,21);
console.log(num);

function maxnum(a,b){
    if(a<b) return b;
     return a;
   
}

//another method
function ma(c,d){
    return(c<d) ? d : c ;
}

let n = ma(54,88);
console.log(n);



//exercise islandscape

function islandscape(width,height){
    return (width>height)? 'landscape':'no';
}

let landscape = islandscape(59,32);
console.log(landscape);

//another method
let Landscape = isLandscape(100,222);
console.log(Landscape);

function isLandscape(width,height){
    return(width>height);
}




//=========fiz buzz

//devisible by 3 => Fizz
//devisible by 5 => Buzz
//devisible by both 3 and 5 => fizzBuzz
//not Divisible by both 3 or 5 => input


const output = fizzBuzz('8');
console.log(output);


function fizzBuzz(input){
    if(input === 3){
        return 'fizz';
    }
    else if(input === 5){
        return 'Buzz';
    }
    else if(input === 15){
        return 'fizzBuzz';
    }
    else if(typeof input !== 'number'){
            return 'Not a Number';
    }else{
        return input;
    }
}


//exercise

//speed linit = 70
//5 -> 1 point
//math.floor(1.3)
//12 points -> suspended


checkSpeed(77)
function checkSpeed(speed){

const speedLimit = 70;
const kmPerPoint = 5;
    if(speed <  speedLimit + kmPerPoint){
        console.log('ok');
        return ;
    }
    else{
            let point = (speed - speedLimit);
            point = point/kmPerPoint;
            
            point = Math.floor(point);
           
            if(point>=12){
                console.log('License suspended');
            }
            else{
                console.log('Point',point)
            }
        }
        
    }


//=========even odd function
showNumber(20);

function showNumber(limit){
   for( let i = 0 ; i <= limit ; i++){
   if(i % 2 ===  0){
    console.log(i,'"EVEN"');
   }
   else{
    console.log(i,'"ODD"');
   }
}
}


//another mehtod
showNumber1(30);

function showNumber1(li){
    for(let j = 0; j<=li ; j++){
        const msg = (j % 2 === 0)? 'EVEN':'ODD';
        console.log(j,msg);
    }
}


//call trusy 

//lsit of falsy value

//undefined
//null
//''
//false
//0
//NaN(not any number)
const isActive = '';//falsy (false)
const name = 'mosh';//truthy(true)
if(name){
    console.log('Hello ');
}


const array = [1,2,3,2,'',false];
let a = countTruthy(array);

//console.log(countTruthy(array));


function countTruthy(array){
    let count = 0;
    for (let a of array){
        if(a){
            count = count +1;
            
            }
    }
    console.log(count);

}


//object exercise

const movie = { title:'a',releaseYear:1999,rating:3.3,director:'b'};
let call = showProperties(movie);


function showProperties(movie){
    for(let value in movie){
        //console.log(movie[value]);
        if(typeof movie[value] === 'string'){
            
            console.log(value,movie[value]);
        }
    }
}


//exercise sum and multiple


let s  = sum(10);
//console.log(s);

function sum(limit){
     let sumE = 0;

     for(let i = 0 ; i<= limit ; i++){
         if(i % 3 === 0 || i % 5 === 0){
             sumE = sumE + i;
         }
        
     }
     console.log(sumE);
    }
  

    

