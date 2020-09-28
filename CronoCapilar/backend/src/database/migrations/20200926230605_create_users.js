exports.up = function(knex) {
    return knex.schema.createTable('users', function(table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('cidade').notNullable();
        table.string('uf').notNullable();
        table.string('typeHair').notNullable();
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');  
};