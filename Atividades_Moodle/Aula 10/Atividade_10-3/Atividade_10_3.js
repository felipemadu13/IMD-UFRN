function mdc() {
    var a = Number(document.getElementById("A").value);
    var b = Number(document.getElementById("B").value);


    if (a <= 0 || b <= 0){
        document.getElementById("resultado").innerHTML = "Um dos números não é positivo."
    } else {
        while (a != b) {
            if (a > b) {
                a = a-b; 
            } else {
                b = b-a; 
            }
         } 
         document.getElementById("resultado").innerHTML = `O MDC é ${a}`;
    }

}

