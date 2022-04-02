console.log("tut 14");
/*
element selector

1.Single element
2.Multi element



*/
let check=document.getElementById('first');
// check=check.className;
// check=check.childNodes;

check.style.color='red'
check.innerHTML='<b> hi this is sidha';
// check.innerText='reddy';
console.log(check);



// let sel = document.querySelector('#first');
// let sele = document.querySelector('.child1');
 sele = document.querySelector('h1');
 sele = document.querySelector('div');
console.log(sele);
// sele.style.color='red'


// multi element selector


let elems=document.getElementsByClassName('container');
 elems=document.getElementsByTagName('div');
//console.log(elems[0].getElementsByClassName('child1'));
console.log(elems)

Array.from(elems).forEach(element=>{
    console.log(element)
    element.style.color='blue'
})

