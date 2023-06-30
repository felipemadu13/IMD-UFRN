exports.seed = function(knex) {
  // Remove todos as categories
  return knex('categories')
    .then(function () {
      return knex('categories').insert([
        {
          name: 'Serviços'
        }
      ]);
    });
};
