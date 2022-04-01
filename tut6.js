console.log('we are at tut6');
const names='sidddartha';
const greeting='hi morning';
console.log(names +' '+greeting);
let html;
html = '<h1> this is heading </h1>'+'<p>this my heading</p>';

html=html.concat('this',' ','sidd');
console.log(html);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html.length);

console.log(html[0]);
console.log(html[10]);
console.log(html.indexOf('this'));
console.log(html.lastIndexOf('this'));
console.log(html.charAt('10'));
console.log(html.endsWith('sidd'));
console.log(html.endsWith('sidsdvd'));
console.log(html.includes('this'));
console.log(html.substring(2,50));
console.log(html.slice(0,4));
console.log(html.slice(-4));
console.log(html.split(' '));
console.log(html.replace('this','it'));
let fruit1='orange';
let fruit2='mango';

let myHt=`hello ${names} 
<h1>this is heading
<p>you like ${fruit1} and ${fruit2}
`;

document.body.innerHTML=myHt;











