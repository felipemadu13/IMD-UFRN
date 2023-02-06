const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')
const postMid = require('../middleware/validarPost.middleware')

const posts = {}

router.post('/', postMid)
router.put('/', postMid)

router.get('/:id', (req, res) => {
    res.json({posts: posts[req.params.id]})
})

router.put('/', (req, res) => {
    const id = req.query.id
    if (id && posts[id]){
        const post = req.body
        post.id = id
        posts[id] = post
        res.json({msg: "Post atualizado com sucesso!"})
    }else{
        res.status(400).json({msg: "Post não encontrado!"})
    }
})

router.delete('/', (req, res) => {
    const id = req.query.id
    if (id && posts[id]){
        delete posts[id]
        res.json({msg: "Post deletado com sucesso!"})
    }else{
        res.status(400).json({msg: "Post não encontrado!"})
    }
})

router.post('/', (req, res) => {
    const post = req.body
    const idPost = uuidv4()
    post.id = idPost
    posts[idPost] = post
    res.json({msg: "Post adicionado com sucesso!"})
})

router.get('/', (req, res) => {
    res.json({posts: Object.values(posts)})
})

module.exports = router