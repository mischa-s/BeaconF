module.exports = function (knex) {
  return {

    add: function (table, farm) {
      return knex(table).insert(farm)
      .then(() => {
        return knex(table).select()
      })
    },

    find: function (table) {
      return knex(table).select()
    },
    getUserByUserName: function (userName) {
      return knex('users')
        .select()
        .where('name', userName)
    }

  }
}
