const bcrypt = require('bcrypt');

exports.seed = function(knex) {
  // Remove todos os employees
  return knex('employees').del()
    .then(function () {
      // Depois insere os seguintes:
      return knex('employees').insert([
        {
          id: 1,
          name: 'Maria Admin',
          email: 'maria@pettopstore.com',
          password: bcrypt.hashSync('123456', 10),
          is_admin: true
        },
        {
          id: 2,
          name: 'João Vendedor',
          email: 'joao@pettopstore.com',
          password: bcrypt.hashSync('654321', 10),
          is_admin: false
        },
      ]);
    });
};
