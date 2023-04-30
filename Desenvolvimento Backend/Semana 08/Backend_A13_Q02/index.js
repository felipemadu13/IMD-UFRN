const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
require('dotenv').config();

app.use(express.json());

app.get('/token', (req, res) => {
  const payload = Math.random();
  const token = jwt.sign({payload}, process.env.ACCESS_TOKEN_SECRET, {expiresIn:'1h'});
  res.json({token});
});

app.get('/validar', (req, res) => {
  const auth = req.headers["authorization"]
  const token = auth && auth.split(' ')[1]

  try {
    const payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    res.status(200).json({msg: 'Token Válido', payload});
  } catch (err) {
    return res.status(400).json({msg: 'Token Inválido'});
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Servidor funcionando na porta ${process.env.PORT}`);
});
