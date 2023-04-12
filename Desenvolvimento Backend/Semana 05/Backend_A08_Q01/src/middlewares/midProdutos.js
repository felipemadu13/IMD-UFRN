const Ajv = require("ajv")
const ajv = new Ajv()
const schemaArray  = require('../schemas/schemaProdutosArray')
const schemaString = require('../schemas/schemaProdutosString')

function validarProduto(req, res, next) {

    const tags = req.body.tags

    if (typeof Number(req.body.preco) === "number" && isFinite(Number(req.body.preco))) {

    if (typeof tags === 'object') {
        const validate = ajv.compile(schemaArray)
        const valid = validate(req.body)
        if(valid) {
            next();
        } else {
            res.status(400).json({msg: "Dados Inválidos", Erro: validate.errors})
        }
    } else {
            const validate = ajv.compile(schemaString)
            const valid = validate(req.body)
            if(valid) {
                next();
            } else {
                res.status(400).json({msg: "Dados Inválidos", Erro: validate.errors})
            } 
        }
    } else {
        res.status(400).json({msg: "O preco precisa ser do tipo String"})
    }
}




module.exports = validarProduto