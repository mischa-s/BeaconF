
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('farms', function (table) {
    table.decimal('latitude')
    table.decimal('longitude')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema('farms', function (table) {
    table.dropColumn('latitude')
    table.dropColumn('longitude')
  })
}
