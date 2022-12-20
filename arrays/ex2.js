const numbers = [1,2,3,4,5]

//console.log(numbers.includes(1));

function includes(array,searchElement){
    for(let element of array)
     if(element === searchElement){
        return true;
     }else{
        return false;
     }
}

const array = includes(numbers,13);
console.log(array)