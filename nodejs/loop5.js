/*
    forEach()

    this is loop only works in an Array.

*/

var data = ["red", "green", "blue", 25, true, 250.23];

data.forEach(function(x){
    console.log(x);
});

var info = [
    {
        name : "rohit",
        age : 25,
        city : "indore"
    },
    {
        name: "james",
        age: 25,
        city: "ujjain"
    },
    {
        name: "amit",
        age: 22,
        city: "mubmai"
    },
    {
        name: "nidhi",
        age: 20,
        city: "pune"
    },
    {
        name: "nilesh",
        age: 30,
        city: "indore"
    }
];

info.forEach(function(a, n){
    console.log(a.name);
    console.log(a.city);
    console.log(n);
})




