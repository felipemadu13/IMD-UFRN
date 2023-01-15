function mais_velho() {
    var data1 = new Date(document.getElementById("data1").value);
    var data2 = new Date(document.getElementById("data2").value);

    dataMili1 = data1.getTime();
    dataMili2 = data2.getTime();

    if (dataMili1 < dataMili2) {
        document.getElementById('saida').innerHTML = "A pessoa A é mais velha que B"
    } else if (dataMili1 > dataMili2) {
        document.getElementById('saida').innerHTML = "A pessoa B é mais velha que A"
    } else {
        document.getElementById('saida').innerHTML = "As pessoas A e B possuem a mesma idade"
    }

}
