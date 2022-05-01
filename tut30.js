console.log('this is tutorial 30');

const proto ={
    slogan : function(){
        return 'this company is the best';

    },
    changeName : function(newName){
        this.name = newName;

    }

}
// const harry = Object.create(proto);
// harry.name = "Harry";
// harry.role = "programmer";
// harry.changeName("Harry2");
// console.log(harry);

const harry = Object.create(proto,
    {
        name : {value: "harry",writable : true},
        role : {value : "programmer"},
    })

    console.log(harry);
    harry.changeName("Harry2");
    console.log(harry);