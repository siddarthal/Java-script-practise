console.log("tut 28");

let obj = {
  name: "sidha",
  rollNo: 29,
  address: "europe",
};

console.log(obj);


function obj1(givenName){
    this.names = givenName;

    obj1.prototype.getName = function(){
        return this.name;
    }
}

let obj2= new obj1('siddartha');

console.log(obj2);