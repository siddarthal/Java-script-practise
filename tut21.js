console.log("hi");

let divEle = document.createElement("div");

divEle.setAttribute("id", "sidh");



let val = localStorage.getItem('text');
let text;
if(val==null)
{
    text = document.createTextNode("hi this is sidha");
}
else{
    text=document.createTextNode(val);
}
divEle.appendChild(text);

divEle.setAttribute(
  "style",
  "border:2px solid red;   width:150px; margin:30px; padding:30px"
);

let container = document.querySelector(".container");

let first = document.getElementById("hi");

console.log(divEle, container, first);

container.insertBefore(divEle, first);

divEle.setAttribute("class", "super");

divEle.addEventListener("click", function () {
  let noTa = document.getElementsByClassName("reddy").length;
  if (noTa == 0) {
    let html = sidh.innerHTML;
    divEle.innerHTML = `<textarea  class="reddy" rows="4" ">
    ${html}
    
    </textarea>`;
  }
  let texAr=document.getElementsByClassName('reddy');
  texAr.addEventListener('blur',function(){
   
    sidh.innerHTML = texAr.value;

    localStorage.setItem('text', texAr.value);

  })


});

