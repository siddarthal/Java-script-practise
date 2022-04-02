console.log("hi");
let element = document.createElement('li');
let element2 = document.createElement('h1');
element2.className='container';
let tex = document.createTextNode('go to code with harry');
element2.append(tex);

let div = document.querySelector('.container');
div.appendChild(element2);
console.log(element2);
let ref = document.createElement('div')
ref.innerHTML = '<a href=www.google.com>hi </a>'
element2.appendChild(ref);
// let textNode= document.createTextNode('hi thi is sidha')
// element.appendChild(textNode)
// element.className ='child';
// element.id='chiledd';
// element.setAttribute('title','myTitle')
// // element.innerHTML="<p>created by sidha</p>"
// let ul = document.querySelector('ul')
// console.log(ul)
// ul.appendChild(element)

// console.log(element)



// let elm = document.createElement('h3')
// elm.id ='elem2'
// elm.className ='elem2'
// let text = document.createTextNode("hi my is brtuh")
// elm.appendChild(text)

// element.replaceWith(elm);

// let li = document.getElementById('hi')
// // li.replaceChild(elm,document.getElementById('sid'));
// li.removeChild(document.getElementById('html'));
// let elm1=elm.getAttribute('class');
// elm.removeAttribute('id');
// console.log(elm,
//     elm1);
