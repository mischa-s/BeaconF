module.exports = function(knex) {
  return {

    add: function (table, row) {
      return knex(table)
      .then(() => {
        return this.find(table, {})
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
