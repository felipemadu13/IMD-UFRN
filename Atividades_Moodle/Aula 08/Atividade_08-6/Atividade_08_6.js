function idade() {
    var data = new Date();
    var aniversario = new Date(document.getElementById("data").value);
    
    var idademili = (data.getTime() - aniversario.getTime());
    var idadeData = new Date(idademili); 
  
    var idade = parseInt(idadeData.getUTCFullYear() - 1970);
    


    document.getElementById("saida").innerHTML = `${idade} anos`;
}
