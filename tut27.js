console.log("hi");

// object literal
let obj1 = {
  car: "maruti",
  topSpeed: 90,
  function() {
    console.log("running");
  },
};


console.log(obj1.car);

// construcor

function genCar(names,fopspeed)
{
    this.name= names;
    this.topSpeed= fopspeed;
   this.run= function(){

    console.log(`${this.name} is runnig`);

   }

}

obj2=new genCar('sidha',100);
obj3=new genCar('ra',10);
console.log(obj3);
