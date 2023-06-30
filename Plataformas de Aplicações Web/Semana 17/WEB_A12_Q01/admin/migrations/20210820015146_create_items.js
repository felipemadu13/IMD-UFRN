
exports.up = function(knex) {
  return knex.schema.createTable('items', function (table) {
    table.increments('id');
    table.integer('sale_id').notNullable().unsigned().references('sales.id');
    table.integer('product_id').notNullable().unsigned().references('products.id');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('items');
};
