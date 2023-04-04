const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const midProdutos = require('../middlewares/midProdutos')
const { Produtos } = require('../models')

router.post('/', midProdutos);
router.put('/:id', midProdutos);

router.get('/', async (req, res) => {
    const produtos = await Produtos.findAll();
    res.status(200).json({Produtos: produtos})
})

router.post('/', async (req, res) => {
    const produto = await Produtos.create(req.body)
    res.status(200).json({msg: "Produto adicionado com sucesso!", "Produto Adicionado": produto})
})

router.put('/:id', async (req, res) => {
    const id = req.params.id
    const produto = await Produtos.findByPk(id)

    if (produto) {
        produto.nome = req.body.nome
        produto.descrição = req.body.descrição
        produto.preço = req.body.preço
        await produto.save()
        res.status(200).json({msg: "Produto atualizado com sucesso!"})
    } else {
        res.status(400).json({msg: "Produto não encontrado!"})
    }

})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    const produto = await Produtos.findByPk(id)

    if (produto) {
        await produto.destroy()
        res.status(200).json({msg: "Produto deletado com sucesso!"})
    } else {
        res.status(400).json({msg: "Produto não encontrado!"})
    }

})

module.exports = router