module.exports = {
    type: "object",
    properties: {
      nome: { type: "string" },
      descricao: { type: "string" },
      preco: { type: "number" },
      tags: {type: "array", items: {type: "string"}},
      foto: { type: "string"},
      promocao: { type: "boolean"},
      precoPromocao: { type: "number"}
    },
    required: ["nome", "preco"],
    additionalProperties: false
}