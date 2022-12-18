let address = createAddress('dambulla','kurunegala',3432);

console.log(address);

//factory function
function createAddress(Street,city,zipcode){
    return{
        Street,
        city,
        zipcode,
    }
}


//constructor function

function Address(street,city,zipcode){
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}


let addresss = new Address('dambulla','kandy',2322);
console.log(addresss);
