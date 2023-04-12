'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Produtos', [{
    nome: "Camiseta Batman",
    descrição: "100% Algodão",
    preço: 55.90,
    createdAt: new Date(),
    updatedAt: new Date()
   }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Produtos', {nome: "Camiseta Batman"}, {});
  }
};
