const express = require('express');
const router = express.Router();
const midProdutos = require('../middlewares/midProdutos')
const { Produtos } = require('../db/models')
const { Tags } = require('../db/models')
const path = require('path')
var multer = require('multer')

//
// MULTER
//

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
         cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname)) 
    }
})

const fileFilter = (req, file, cb) => {
    const mimes = ['image/jpeg', 'image/png']
    if (mimes.includes(file.mimetype)){
        cb(null, true);
    } else {
        return cb('Arquivo não suportado. Apenas jpg e png são suportados.');
    }
}

var upload = multer({storage: storage, fileFilter: fileFilter})

//
// MIDDLEWARES
//

router.post('/',upload.single('foto'))
router.post('/', midProdutos);
router.put('/:id', midProdutos);

//
// ROTAS
//

router.get('/', async (req, res) => {
    const produtos = await Produtos.findAll();
    res.status(200).json({Produtos: produtos})
})

router.post('/:id/upload', upload.single('foto'), async (req, res) => {
    const id = req.params.id
    const produto = await Produtos.findByPk(id)
    if (produto){
            produto.foto = `/static/uploads/${req.file.filename}`
            await produto.save()
            res.json({msg: "Upload realizado com sucesso!"})
    }else{
            res.status(400).json({msg: "Post não encontrado!"})
    }
})

router.post('/', async (req, res) => {
    const tags = req.body.tags

    if (req.file){
        req.body.foto = `/static/uploads/${req.file.filename}`
    }

    if (typeof tags === 'object') {
        const produto = await Produtos.create(req.body)
        for (i of tags) {
            const tagsMethod = await Tags.create(
                {tags: i}
                )
                await tagsMethod.update({produtosId: produto.id})
            }
            res.status(200).json({msg: "Produto adicionado com sucesso!", "Produto Adicionado": produto})
    } else if (typeof tags === 'string') {
        const produto = await Produtos.create(req.body)
        const tagsMethod = await Tags.create({tags: req.body.tags});
        await tagsMethod.update({produtosId: produto.id})
        res.status(200).json({msg: "Produto adicionado com sucesso!", "Produto Adicionado": produto})
    } else {
        const produto = await Produtos.create(req.body)
        res.status(200).json({msg: "Produto adicionado com sucesso!", "Produto Adicionado": produto})
    }

})


router.put('/:id', async (req, res) => {
    const id = req.params.id
    const produto = await Produtos.findByPk(id)
    const tagsAll = await Tags.findAll({where: {produtosId: id}})

    if (produto) {
        produto.nome = req.body.nome
        produto.descricao = req.body.descricao
        produto.preco = req.body.preco
        await produto.save()
        if (tagsAll.length === 0) {
            const tags = req.body.tags
            if (typeof tags === 'object') {
                for (i of tags) {
                    const tagsMethod = await Tags.create(
                        {tags: i}
                        )
                        await tagsMethod.update({produtosId: produto.id})
                    }
            } else {
                const tagsMethod = await Tags.create({tags: req.body.tags});
                await tagsMethod.update({produtosId: produto.id})
            }

        } else {
            await tagsAll.map((tag, index) => {
                    if (Array.isArray(req.body.tags)) {
                        tag.tags = req.body.tags[index]
                        tag.save()
                    } else {
                        tag.tags = req.body.tags
                        tag.save()
                    }
            })
        }
        res.status(200).json({msg: "Produto atualizado com sucesso!"})
    } else {
        res.status(400).json({msg: "Produto não encontrado!"})
    }

})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    const produto = await Produtos.findByPk(id)
    const tagsAll = await Tags.findAll({where: {produtosId: id}})

    if (produto) {
        await produto.destroy()
        await tagsAll.map((tag) => {
            tag.destroy()
        });        
        res.status(200).json({msg: "Produto deletado com sucesso!"})
    } else {
        res.status(400).json({msg: "Produto não encontrado!"})
    }

})

module.exports = router