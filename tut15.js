console.log('hi');

let cont = document.querySelector('.container');
// console.log(cont.children);
let node = cont.childNodes[1].nodeName;
let nodeType= cont.childNodes[1].nodeType;
console.log(node)
console.log(nodeType)
// node types
/*
1. Element;
2 Attribute
3.Text
8.comment
9.document
10.doctype


 */

let container = document.querySelector('.container')

// console.log(container.children[0].children[0].children)
console.log(container.firstChild);
console.log(container.lastChild);

console.log(container.firstElementChild);
console.log(container.lastElementChild);

console.log(container.childElementCount);

console.log(container.firstElementChild.nextElementSibling);




