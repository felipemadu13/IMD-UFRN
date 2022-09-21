function difDatas() {
    var data1 = new Date(document.getElementById("data1").value);
    var data2 = new Date(document.getElementById("data2").value);

    var mili = (data2.getTime() - data1.getTime());
    var dias = Math.floor(mili / 86400000);
    document.getElementById("saida").innerHTML = `A diferença de datas em milisegundos é ${mili} e em dias é de ${dias}`;
}
