function demo(a, b)
{
    var x = a*b;
  

    var y = x/2;
    var z = y+20;
    
    return { a: "Rohit", b : z};

}


var ans = demo(10, 10);
console.log(ans.b);