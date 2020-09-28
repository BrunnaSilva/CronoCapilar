
exports.up = function(knex) {
    return knex.schema.createTable('stages', function(table){
        table.increments();
        table.string('title').notNullable();
        table.string('data').notNullable();

        table.string('products_id').notNullable();
        table.foreign('products_id').references('id').inTable('products');

        table.string('users_id').notNullable();
        table.foreign('users_id').references('id').inTable('users')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('stages');
};
