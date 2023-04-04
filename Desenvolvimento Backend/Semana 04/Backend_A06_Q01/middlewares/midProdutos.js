const Ajv = require("ajv")
const ajv = new Ajv()
const schemaProdutos = require('../schemas/schemaProdutos')


function validarProduto(req, res, next) {
    const validate = ajv.compile(schemaProdutos)
    const valid = validate(req.body)
    if(valid) {
        next();
    } else {
        res.status(400).json({msg: "Dados Inválidos", Erro: validate.errors})
    }
}

module.exports = validarProduto