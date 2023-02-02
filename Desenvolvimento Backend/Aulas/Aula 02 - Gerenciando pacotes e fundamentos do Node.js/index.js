const fs = require('fs');
// const data = fs.readFileSync('./tmp.txt', {encoding: 'utf-8', flag:'r'})
// console.log(data)

fs.readFile('./tmp.txt', {encoding: 'utf-8', flag:'r'}, function (err, data){
   if(!err) {
    console.log(data)
   } 
});

console.log('executou aqui!')