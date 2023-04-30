'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Produtos',
      'promocao',
      {
        type: Sequelize.BOOLEAN,
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Produtos',
      'promocao'
    );
  }
};

