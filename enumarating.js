const circle =  {
    radius:1,
    color:'red',
    draw(){
        console.log('draw');
    }
};

for(let key in circle){
    console.log(key);//keys witharak print karai
    console.log(key,circle[key]);//key and values dekama print karai
}
console.log('');
console.log('for of')

for(let key1 of Object.keys(circle)){
    console.log(key1);//keys tika witharak print karai
}


for(let entry of Object.entries(circle)){
    console.log(entry);//keys and valuse dekama array ekakata dala print karai
}


if('' in circle) console.log('yes');

