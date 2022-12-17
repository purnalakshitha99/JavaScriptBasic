// showPrime(20);

// function showPrime(limit){
//     for(let number = 2; number<= limit ; number++){

//         let isPrime = true;
//         for(let factor = 2; factor<number ;factor++){
//             if( number % factor === 0){
//                 isPrime = false;
//                 break;
//             }
            
//         }
//        if(isPrime){
//         console.log(number);
//        } 
//     }
// }
showPrime2(10)

function showPrime2(limit){
    for (let number =2; number<=limit ; number++){
        if(isPrime(number)){
            console.log(number);
        }
    }
}



function isPrime(number){
    let isPrime = true;
    for(let factors = 2 ; factors < number ; factors++){
        if(number%factors === 0){
            // isPrime = false;
            // break

            return false;
        }
        
    }
    return true;
}