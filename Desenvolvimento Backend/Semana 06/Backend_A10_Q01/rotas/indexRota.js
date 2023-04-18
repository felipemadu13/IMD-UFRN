const express = require('express')
const router = express.Router()
const { Produto, Tag } = require('../models')
const moment = require('moment')
moment.locale('pt-br')

router.get('/', async (req, res) => {
    const produtos = await Produto.findAll({
        include: [{
           model: Tag
        }]
    })
    res.render('pages/produtos', {produtos: produtos, layout: 'layouts/layout.ejs'})
})



module.exports = router