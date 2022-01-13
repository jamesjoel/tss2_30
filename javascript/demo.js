function hello(){
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    var x = parseInt(a);
    var y = parseInt(b);
    var c = x+y;
    document.getElementById("ans").innerHTML=c;
}
function add(){
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");

    td1.innerHTML="&nbsp;";
    td2.innerHTML="&nbsp;";
    var tr = document.createElement("tr");

    tr.appendChild(td1);
    tr.appendChild(td2);

    document.getElementById("tab").appendChild(tr);

}