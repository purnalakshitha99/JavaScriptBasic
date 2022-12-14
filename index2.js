
//====================assignment operators


console.log('meka aluth eka');

// x = x+5;
// x += 5;

// x = x-4;
// x -=4;

let y = 10;

//relational
console.log(y>0);
console.log(y<=10);
console.log(y>0);
console.log(y>0);
console.log(y>0);

//Equality(type + value)
console.log(y===10);
console.log(y!==10);


//Lose Equality()
console.log('Lose Equality');
console.log(1 == 1);
console.log( 1 == '1');
console.log(true == 1);


//ternary operator
console.log('ternary operator')
let point = 100;

let p = point>110 ? 'Gold' : 'Silver';

console.log(p);


let x = 12;

let c = x>0 ? 'win' : 'lost';
console.log(c);



//logical oparators

let high = true;
let niw = false;

let h = high || niw;

console.log(h);

//not operator

let n = !h; 
console.log(n);

//ex this
let highIncome = false;
let goodCreditScore = false;
let elegibleForLoan = highIncome || goodCreditScore;

console.log('elegible '+elegibleForLoan);

//not elegible
let notEligible = !elegibleForLoan;
console.log('elegible '+notEligible);

  

//==============logical operator with non boolean 

/*false || false
false

true || false
true


false || 'mosh'
'mosh'

true || 'mosh'
true

false || 2
2

true || 2
true

false || 2 || 'mosh'   //methanadi kopamana thibbath false nam mulin thiyana deka witharak balayi anith ewa ignor karai he
2*/


//let defaultColor = undefined;

let defaultColor = 'blue';
let useColor = 'red';


let color = defaultColor && useColor ;//&& ekedi dakunu patte value eka dei
let color2 = defaultColor || useColor ;//or ekedi wam atha patte eka\
//dakunu patte eka undefined unoth and ekedi #undefind kiyala pennai
//wam patte eka undefind unoth or || ekedi dakunu patte value eka pennai
console.log('color1: '+color);

console.log('color2 : '+color2);







//============bit wise operators

// 1 = 00000001
// 2 = 00000010
// 3 = 00000011

console.log(1 | 2);  //me deka ekathu karanwa or ekedi '|' eka simble ekai danne
console.log(1 & 2);

let num1 = 1111;
let num2 = 0001;

console.log(num1 & num2);

//real world use bitwise operator
 //Read,Write,Execute
 //000000100 - read permition
 //000000010 - write permition
 //000000001 - execute permition

 const readPermission = 4;
 const writePermition = 2;
 const executePermiton = 1;

 let myPermition = 0; 
 myPermition = myPermition |  writePermition ;//methana dekak thiyeddi my permition eke value eka 0 wela thibboth yata msg ekata no ei thunk(ilakkam thuna newe variable ewa thunk (readpermition | writePermition | exutionpermiton )) thibboth yes ei 
 //let myNumber =( myPermiton | readPermission | executePermiton)//thunama ekathu karala pennai

 console.log(myPermition);
 let msg = (myPermition & readPermission)? 'yes':'no';
 
 console.log(msg);



//operator presidence 
let t = 2+3*4;
let u = (2+3)*4;
console.log(t);
console.log(u);


//swapping variable
let a = 'red';
let b = 'blue';

let d = a;
a = b;
b = d;


console.log('a: '+a);
console.log('b: '+b);


//if else statement 
let Hour = 17;
if(6 <= Hour  && Hour < 12 ){
    console.log('good Morning');
}
else if(12<= Hour  && Hour < 18 ){
    console.log('good afternoon');
}
else{
    console.log('good  evening');
}


//switch case
let role;
role = 10;

switch(role){
    case 1:
        console.log('sunday');
        break;
    case 2:
        console.log('monday');
        break;
    case 3:
        console.log('tuesday');
        break;
    default:
        console.log('inavalid');
}
 
let actor;
actor = 'micle'

switch(actor){
    case 'micle':
        console.log('sunday');
        break;
    case 'wasantha':
        console.log('monday');
        break;
    case 'nuwan':
        console.log('tuesday');
        break;
    default:
        console.log('inavalid');
}

     