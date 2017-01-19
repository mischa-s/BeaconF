
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('farms', function(table) {
    table.increments();
    table.string('name');
    table.string('location');
    table.string('type');
    table.string('mainImage');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('farms');
};
