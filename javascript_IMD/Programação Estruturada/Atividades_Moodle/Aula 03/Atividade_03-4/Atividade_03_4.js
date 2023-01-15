    function soma_e_escreve() {
        var x = Number(document.getElementById("entrada1").value), 
            y = Number(document.getElementById("entrada2").value), 
            z = x + y;

        document.getElementById("saida").innerHTML = z;
    }