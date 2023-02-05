const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')
const usuarioMid = require('../middleware/validarUsuario.middleware')

const usuarios = {}

router.post('/', usuarioMid)
router.put('/', usuarioMid)

router.get('/:id', (req, res) => {
    res.json({usuarios: usuarios[req.params.id]})
})

router.put('/', (req, res) => {
    const id = req.query.id
    if (id && usuarios[id]){
        const usuario = req.body
        usuario.id = id
        usuarios[id] = usuario
        res.json({msg: "Usuário atualizado com sucesso!"})
    }else{
        res.status(400).json({msg: "Usuário não encontrado!"})
    }
})

router.delete('/', (req, res) => {
    const id = req.query.id
    if (id && usuarios[id]){
        delete usuarios[id]
        res.json({msg: "Usuário deletado com sucesso!"})
    }else{
        res.status(400).json({msg: "Usuário não encontrado!"})
    }
})

router.post('/', (req, res) => {
    const usuario = req.body
    const idUsuario = uuidv4()
    usuario.id = idUsuario
    usuarios[idUsuario] = usuario
    res.json({msg: "Usuário adicionado com sucesso!"})       

})

router.get('/', (req, res) => {
    res.json({usuarios: Object.values(usuarios)})
})

module.exports = router