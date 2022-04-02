console.log('hi')



let btn = document.querySelector('#btn');
console.log(btn);

btn.addEventListener('dblclick',function(e){
console.log('thanks',e)

e.preventDefault();

});
btn.addEventListener('click',func1)
function func1(b)
{
    console.log(b,'thabks');
}

document.addEventListener('mouseenter',function(s) {
    console.log(s);
    
})