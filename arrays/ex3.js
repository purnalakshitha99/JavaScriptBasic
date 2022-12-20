const numbers = [1,2,3,4,1,1];

const output = except(numbers,[1,2]);
console.log(output)


function except(array,exclude){
    const output = [];
    for(let element of array)
    if(!exclude.includes(element)){//exclude eke value nathuwa anith value output array ekat add karai //exclude eke athi value ekak awoth eka false wenawa ethakota eka add kranne na exclude eke nathi value ekak awoth true wela ewa add karanwa
        output.push(element);
    }
    return output;
}