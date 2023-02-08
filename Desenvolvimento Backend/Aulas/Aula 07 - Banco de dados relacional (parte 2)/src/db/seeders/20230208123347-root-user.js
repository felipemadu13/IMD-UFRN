'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Usuarios', [{
         email: 'root@gmail.com',
         senha: 'd8fy83uu4j',
         createdAt: new Date(),
         updatedAt: new Date()
     }])
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Usuarios', {email: 'root@gmail.com'}, {})
    }
}
