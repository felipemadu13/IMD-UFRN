'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.addColumn('Tags', 'produtosId', {
            type: Sequelize.INTEGER,
            references: {
                model: 'Produtos',
                key: 'id'
            },
            onDelete: 'SET NULL'
        })
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.removeColumn('Tags', 'produtosId')
    }
};