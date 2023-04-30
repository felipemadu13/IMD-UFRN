'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Produtos',
      'precoPromocao',
      {
        type: Sequelize.REAL,
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Produtos',
      'precoPromocao'
    );
  }
};
