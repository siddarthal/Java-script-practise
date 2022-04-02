// Exercise 1
let a= document.links;
console.log(a);
let my='google';
Array.from(a).forEach(function(element){
    if(String(element).includes(my))
    {
        console.log(element);
    }
})

