const bcrypt = require('bcrypt');

exports.seed = function(knex) {
  // Remove todos os employees
  return knex('employees').del()
    .then(function () {
      // Depois insere os seguintes:
      return knex('employees').insert([
        {
          id: 1,
          name: 'João Barros',
          email: 'jb@natalstore.com',
          password: bcrypt.hashSync('senhajb', 10),
          is_admin: true
        },
        {
          id: 2,
          name: 'Ricardo Augusto',
          email: 'rick08@natalstore.com',
          password: bcrypt.hashSync('senharick08', 10),
          is_admin: false
        },
      ]);
    });

};