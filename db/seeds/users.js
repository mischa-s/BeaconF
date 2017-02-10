
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({id: 1, name: 'this', email: 'this@this.com', password: 'password'}),
        knex('users').insert({id: 2, name: 'that', email: 'that@that.com', password: 'password'}),
        knex('users').insert({id: 3, name: 'theOther', email: 'theOther@theOther.com', password: 'password'})
      ])
    })
}
