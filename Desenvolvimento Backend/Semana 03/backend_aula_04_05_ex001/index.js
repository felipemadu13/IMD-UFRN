const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');
const PORT = 3000;

const produtos = {};

app.use(express.json())

app.get('/produtos', (req, res) => {
    res.json({Produtos: Object.values(produtos)})
})

app.post('/produtos', (req, res) => {
    const produto = req.body
    const uuidProduto = uuidv4()
    produto.id = uuidProduto
    produtos[uuidProduto] = produto
    res.json({msg: "Produto adicionado com sucesso!", "Produto Adicionado": produto})
})

app.put('/produtos/:id', (req, res) => {
    const id = req.params.id
    if (id && produtos[id]){
        const produto = req.body
        produto.id = id
        produtos[id] = produto
        res.json({msg: "Produto atualizado com sucesso!"})
    } else {
        res.status(400).json({msg: "Produto não encontrado!"})
    }

})

app.delete('/produtos/:id', (req, res) => {
    const id = req.params.id
    if (id && produtos[id]){
        delete produtos[id]
        res.json({msg: "Produto deletado com sucesso!"})
    } else {
    res.status(400).json({msg: "Produto não encontrado!"})
}
})

app.listen(PORT, () => {
    console.log(`Servidor disponível na porta: ${PORT}`)
})