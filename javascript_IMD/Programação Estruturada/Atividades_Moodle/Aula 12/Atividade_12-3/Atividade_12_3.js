var maiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var minusculas = 'abcdefghijklmnopqrstuvwxyz';

function inverter() {
    var str = document.getElementById("entrada").value + "";

    var resultado = "";
  
    for(var i=0; i<str.length; i++)
    {
      if(maiusculas.indexOf(str[i]) >= 0) {
        resultado = resultado + str[i].toLowerCase();
      } else if(minusculas.indexOf(str[i]) >= 0) {
        resultado = resultado + str[i].toUpperCase();
      } else {
        resultado = resultado + str[i];
      }
    }
    document.getElementById("resultado").innerHTML = resultado;
}