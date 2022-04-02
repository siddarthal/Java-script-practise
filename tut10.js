console.log("tu10");
let names='sidha';

function greet(names,thank) {
    

console.log(`${names} hi goodmorning hope you are good ${thank}`);
}
greet(names,'Thanks a lot');
const myFunc= function(than){

}
const myObj={
    name:'skill',
    game:function(){
        return 'nintendo';
    }
}
console.log(myObj.game());
arr=[1,2,3,4,5];
arr.forEach(function(element,index,arr) {
    console.log(element,index,arr);
});

// scope



if(1)
{
var i=234;
console.log(i);
}
console.log(i);
function same(ram) {
     i=10;
    console.log(i);
    return `this is my name: ${ram}`;
   
}
console.log(same('sidha'));

