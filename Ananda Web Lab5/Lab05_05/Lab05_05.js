var num = prompt("Multiplication table of?");
var len = prompt("Multiplication table till?");

function multiplicationTable() {
    var table;
    table='<table id="mul_table">';
    for(i=1;i<=len;i++){
        table+='<tr><td>'+num+'X'+i+'='+num*i+'</td></tr>';
    }
    table+='</table>';
    document.getElementById("result").innerHTML = table;
}