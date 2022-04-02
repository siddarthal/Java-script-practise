console.log("hi");

for (let i = 0; i < 100; i++) {
  console.log(i);
}
let j = 110;
while (j < 10) {
  console.log(j);
  j++;
}
let k = 0;
do {
  
  if(k==5){
    k++;
  continue;}
  console.log(k);
k++;

} while (k < 10);
let arr=[1,2,3,4,5,6]

for (let i = 0; i < arr.length; i++) {
    // const element = array[i];
    console.log(i);
    
}
// arr.forEach(function(element){
//     console.log(element);
// });

let obj= {
    name :'sodhoi',
    age:90,
    os:"mac,"
}
for(let key in obj)
{
    console.log(`the ${key} of object is ${obj[key]}`)
}

