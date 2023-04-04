
module.exports = {

    type: "object",
    properties: {
        nome: {type: "string"},
        descrição: {type: "string"},
        preço: {type: "number"}
    },
    required: ["nome", "preço"],
    additionalProperties: false

}

