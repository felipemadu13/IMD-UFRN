const express = require("express")
var expressLayouts = require('express-ejs-layouts')
const app = express();
const produtoRota = require("./rotas/produtos")
const produtosView = require('./rotas/index')

app.use(express.json())

app.set('view engine', 'ejs')
app.use(expressLayouts)

app.set('layout', 'layouts/layout')

app.use('/static', express.static('public'))

app.use("/api/produtos", produtoRota)
app.use("/produtos", produtosView)

app.get("/", (req, res) => {
  res.json({ msg: "Hello from Express!" });
});

app.listen(8080, () => {
  console.log(`Servidor pronto na porta 8080 no ambiente ${process.env.NODE_ENV}`);
});