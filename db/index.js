module.exports = function(knex) {
  return {

    add: function (table) {
      return knex(table).insert(farm)
      .then(() => {
        return knex(table).select()
      })
    },

    findById: function (table, id) {
      return knex(table).select().then((rows) => rows[0])
    },



    find: function(table) {
      return knex(table).select()
    },

  }

}
