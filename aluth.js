const output = fizzBuzz('6');
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
    else if(typeof input !== 'number'){//string ekk awoth asamanaine
            return 'Not a Number';
    }else{
        return input;
    }
}

// const color1 = ['red','green','blue'];
//  for(let index in color1){
//     //console.log(color1)//array ekama pennai
//     //console.log(index,color1[index])//index ekai value ekai dekama pennai
//     console.log(color1[index]);//value tika withark pennai
//  } 

//  const mark = [100,80,100];

// console.log(grade(mark));

// function grade(mark){
//     let sum = 0;
//     let count = 0;

//     for(let index in mark){
//         console.log(mark[index]);
//         sum = sum + mark[index]
//         count ++;
//     }
   
//     let avg = sum/count;
//     console.log(avg);

//     if(avg > 0 && avg < 60) return 'F';
//         else if(avg >= 60 && avg < 70) return 'D';
//             else if(avg >= 70 && avg < 80) return 'C';
//                 else if(avg >= 80 && avg < 90) return 'B';
//                     else if(avg >= 90 && avg < 100) return 'A';
                    

   
   

// }




//new
const mark4 = [60,60,60];

console.log(grade(mark4));

function grade(mark1){
    const avg = calculateAVG(mark1);
   

    if(avg < 60) return 'F';
    if(avg < 70) return 'D';
    if(avg < 80) return 'C';
    if( avg < 90) return 'B';
    if( avg < 100) return 'A';
}

function calculateAVG(mark1){
    let sum = 0;
    

    for(let index of mark1){
        console.log(index);
        sum = sum + index
        
    }
   
    return sum/mark1.length;
    
}
