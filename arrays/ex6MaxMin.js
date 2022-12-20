const numbers = [1,2,3,4,5,6];

const output = getmax(numbers)
console.log(output);


function getmax(array){
    if(array.length === 0)
    return undefined;

    let max = array[0];

    for (let i = 0 ; i<array.length; i++){
        if(array[i]>max){
            max = array[i];
        }

    }
    return max;
}