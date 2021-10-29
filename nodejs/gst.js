function gst(price, type)
{
    switch(type){
        case 'A' :  var x = price*8/100;
                    var mrp = price + x;
                    break;
        case 'B':   var x = price * 12 / 100;
                    var mrp = price + x;
                    break;
        case 'C':   var x = price * 20 / 100;
                    var mrp = price + x;
                    break;
        case 'D' : var x = price * 28/100;
                    var mrp = price + x;
                    break;

    }

    console.log(mrp);
}

gst(25000, 'C');
gst(3000, 'A');
// gst('B', 5000);