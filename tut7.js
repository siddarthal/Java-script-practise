console.log('hi');

let marks=[34,78,96,57];
const fruit=['apple','orange','mango'];
const mixed=['str',89,66,[3,5]];
const arr = new Array(1,34,657,'pineapple');
console.log(arr);
console.log(mixed);
console.log(fruit);
console.log(marks);
console.log(arr.length);
console.log(Array.isArray('dff'));
arr[0]='hello'
console.log(arr);



let value = marks.indexOf(96);
// document.body.innerHTML=value;
console.log(value);


// mutating array

// marks.push(34); fpr last
// marks.unshift(1000);
// marks.pop();
// marks.shift();
// marks.splice(2,3);
// marks.reverse();
let marks2=[1,2,4,342,35,32];
marks=marks.concat(marks2);
console.log(marks);


// Object


let myObj ={
namx:"sidaart",
channel:'star sports',
 marst:[1,3,5,5,6,],

}
console.log(myObj);
console.log(myObj.marst);
console.log(myObj['marst']);




