
exports.up = function(knex) {
    return knex.schema.createTable('products', function(table){
        table.increments();
        table.string('title').notNullable();
        table.string('info').notNullable();

        table.string('users_id').notNullable();
        table.foreign('users_id').references('id').inTable('users')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('products');
};
