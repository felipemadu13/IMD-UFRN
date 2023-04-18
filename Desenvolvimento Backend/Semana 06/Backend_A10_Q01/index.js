const express = require("express");
const app = express();
const produtoRota = require("./rotas/produtos")
var expressLayouts = require('express-ejs-layouts')
const indexRota = require('./rotas/indexRota')


app.use(express.json())

app.set('view engine', 'ejs')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)

app.use('/static', express.static('public'))

app.use("/api/produtos", produtoRota)

app.use('/', indexRota)

app.get("/api", (req, res) => {
  res.json({ msg: "Hello from Express!" });
});

app.listen(8080, () => {
  console.log(`Servidor pronto na porta 8080 no ambiente ${process.env.NODE_ENV}`);
});


