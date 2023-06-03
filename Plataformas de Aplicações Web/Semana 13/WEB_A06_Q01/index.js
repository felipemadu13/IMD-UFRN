const express = require('express');

const PORT = 3000;
const app = express();

app.get('/soma', (req, res) => {
  res.json({resultado: `${Number(req.query.valor1) + Number(req.query.valor2)}`});
});

app.get('/subtracao', (req, res) => {
  res.json({resultado: `${Number(req.query.valor1) - Number(req.query.valor2)}`});
});

app.get('/divisao', (req, res) => {
  res.json({resultado: `${Number(req.query.valor1) / Number(req.query.valor2)}`});
});

app.get('/multiplicacao', (req, res) => {
  res.json({resultado: `${Number(req.query.valor1) * Number(req.query.valor2)}`});
});


app.listen(PORT, () => {
  console.log("Servidor iniciou na porta 3000.")
});