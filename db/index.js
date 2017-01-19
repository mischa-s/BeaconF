module.exports = function (knex) {

  return {
    add: function (table, row) {
      return knex(table)
        .insert(row)
        .then(() => {
          return this.find(table, {})
        })
    },

    find: function (farms) {
      return knex(farms).select()
    },

    findById: function (table, id) {
      return knex(table).select().then((rows) => rows[0])
    },


  }
}
