var dias = 400

let anos = Math.trunc(dias / 365);
dias = dias % 365;

let meses = Math.trunc(dias / 30);
dias = dias % 30;

console.log(`${anos} ano(s)`)
console.log(`${meses} mes(es)`)
console.log(`${dias} dia(s)`)
