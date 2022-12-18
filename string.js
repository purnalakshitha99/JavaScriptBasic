//string primitive
const message = ' this is my first message' ;

//string object 
const another = new String ('hi');


console.log(typeof message);
console.log(typeof another);

console.log(message.length);
console.log(message[0]);

console.log(message.includes('first'));//first kiyala ekak message kiyana object eke thiyanawanam true;
console.log(message.includes('by'));//by kiyal ekak message kiyana object eke nattn false;
console.log(message.startsWith('this'));//this kiyala eken patan gannawanam true
console.log(message.endsWith('d'));//d eken end wenwanm true
console.log(message.indexOf('first'))//patan ganne first ekennm true

console.log(message.replace('first','second'));//first kiyana eka ain wela ethanata replace wenwa second
console.log(message);
console.log(message.toUpperCase());//okkoma capital we
console.log(message.trim())//depaththen thiyana his ida ain karai
console.log(message.trimStart());//start krn thana thiya blank space ek ain karai


const messageNew ='purna lakshitha says \'maru\' \nban';
console.log(messageNew);


console.log(message);

const msg = 'This Is my\n \'first\' msg';
console.log(msg);




const name = 'jaliya';
const anotherNew = 
`Hi ${name} ${5+5},
 Thank you for joining my mailing list.
 
 Regards,
 Mosh`;

 console.log(anotherNew)
