const express = require('express')
const router = express.Router()
const { Produto, Tag } = require('../models')
const moment = require('moment')
moment.locale('pt-br')

router.get('/', async (req, res) => {

    const produtos = await Produto.findAll({
        include: [
          {
            model: Tag,
          },
        ],
        raw: false,
        nest: true,
      })
    const produtoResult = produtos.map((produto) => prepararResultado(produto))
    res.render('pages/index', {produtos: produtoResult})
})

function prepararResultado(produto){

  const result = Object.assign({}, produto)
  result.postadoEm = moment(new Date(result.dataValues.createdAt)).format('DD-MM-yyyy')
  return result
}

module.exports = router