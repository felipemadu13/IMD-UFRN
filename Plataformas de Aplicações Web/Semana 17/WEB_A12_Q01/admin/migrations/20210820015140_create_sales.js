
exports.up = function(knex) {
  return knex.schema.createTable('sales', function (table) {
    table.increments('id');
    table.integer('client_id').notNullable().unsigned().references('clients.id');
    table.integer('employee_id').nullable().unsigned().references('employees.id');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('sales');
};
