const express = require('express');
const app = express();
const rotaProdutos = require('./routes/rotaProdutos');
const PORT = 3000;

app.use(express.json());
app.use("/produtos", rotaProdutos);
app.use('/static', express.static('public'))


app.listen(PORT, () => {
    console.log(`Servidor disponível na porta: ${PORT}`);
})