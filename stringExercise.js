//street
//city
//zipCode
//showAddress(address)

const address = {
    street : 'Dambulla',
    city : 'Kurunegala',
    zipCode : 2232,
    
}

function showAddress(address){
for(let key in address){
    console.log(key,address[key]);
}
}

showAddress(address);