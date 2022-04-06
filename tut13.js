// Exercise 1
let a= document.links;
console.log(a);
let my='google';
Array.from(a).forEach(function(element){
    href=element.href;
    if(href.includes(my))
    {
        console.log(element);
    }
})

