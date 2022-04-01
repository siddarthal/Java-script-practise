// type conversion and type coercion

let myVar;
myVar=String(34);
console.log(myVar,typeof myVar);
// let boolVar= true ;
let boolVar= String(true );
console.log(boolVar,typeof boolVar);

let date =new Date();
console.log(date,typeof date);
let arr=[1,2,3,4,4];
console.log(arr.length,typeof arr);
let i=new Date();
console.log(i.toString());


// let stri = Number("1345");
// let stri = Number("134s5");
 stri = Number(true);
stri = Number([1,2,3,4,5]);



console.log(stri,typeof stri);

// let num=Number('34.09');
// let num=parseInt('34.09');
let num=parseFloat('34.09');
console.log(num.toFixed(44),typeof num);

// Type coercion
let mystr="698";let munm=34;

console.log(parseInt(mystr) + munm);









