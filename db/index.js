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
    },
    addUser: function (table, input) {
      const formattedData = {
        name: input.userName,
        password: input.password,
        email: input.email
      }
      return knex(table)
      .insert(formattedData)
      .then(function (ids) {
        return knex(table)
        .select('name', 'id')
        .where({id: ids[0]})
      })
    }

  }
}
