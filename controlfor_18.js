const mark = [100,80,100];

grade(mark);

function grade(mark){
    let sum = 0;
    let count = 0;

    for(let index in mark){
        console.log(mark[index]);
        sum = sum + mark[index]
        count ++;
    }
   
    let avg = sum/count;
    console.log(avg);

    if(avg > 0 && avg < 60){
        console.log('F');
    }
        else if(avg >= 60 && avg < 70){
            console.log('D');
        }
            else if(avg >= 70 && avg < 80){
                console.log('C');
            }
                else if(avg >= 80 && avg < 90){
                    console.log('B');
                }
                    else if(avg >= 90 && avg < 100){
                        console.log('A');
                    }

   

}

//===========another method



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
const mark1 = [60,60,60];

console.log(grade(mark1));

function grade(mark1){
    let sum = 0;
    let count = 0;

    for(let index in mark1){
        console.log(mark1[index]);
        sum = sum + mark1[index]
        count ++;
    }
   
    let avg = sum/count;
    console.log(avg);

    if(avg < 60) return 'F';
    if(avg < 70) return 'D';
    if(avg < 80) return 'C';
    if( avg < 90) return 'B';
    if( avg < 100) return 'A';
                    

   
   
}


//another method

//new
const mark3 = [60,60,60];

console.log(grade(mark3));

function grade(mark3){
    let sum = 0;
    

    for(let index of mark1){
        console.log(index);
        sum = sum + index
        
    }
   
    let avg = sum/mark1.length;
    console.log(avg);

    if(avg < 60) return 'F';
    if(avg < 70) return 'D';
    if(avg < 80) return 'C';
    if( avg < 90) return 'B';
    if( avg < 100) return 'A';
                    

   
   
}



//another method

//new
const mark5 = [60,60,60];

console.log(grade(mark5));

function grade(mark5){
    const avg = calculateAVG(mark5);
   

    if(avg < 60) return 'F';
    if(avg < 70) return 'D';
    if(avg < 80) return 'C';
    if( avg < 90) return 'B';
    if( avg < 100) return 'A';
}

function calculateAVG(mark5){
    let sum = 0;
    

    for(let index of mark5){
        console.log(index);
        sum = sum + index
        
    }
   
    return sum/mark5.length;
    
}
