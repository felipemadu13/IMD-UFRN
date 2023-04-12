
module.exports = {

    type: "object",
    properties: {
        nome: {type: "string"},
        descricao: {type: "string"},
        preco: {type: "string"},
        tags: {type: "string"}
    },
    required: ["nome", "preco"],
    additionalProperties: false

}



