const express = require('express')
const test = require('ava')
const request = require('supertest-as-promised')

// instaniate test database and routes
const testKnex = require('knex')(require('../../knexfile').test)
const db = require('../../db')(testKnex)
const catsApi = require('../../api/cats')(db)

function makeApp () {
  const app = express()
  app.use('/api/v1/cats', catsApi)
  return app
}

test.beforeEach(() => {
  return testKnex.migrate.latest()
    .then(() => {
      return testKnex.seed.run()
    })
})

test.afterEach.always(() => {
  return testKnex.migrate.rollback()
})


// GET ALL
// test('API | Cats | It responds with a list of cats', (t) => {
//   t.plan(2)
//
//   return request(makeApp())
//     .get('/api/v1/cats')
//     .expect(200)
//     .then((res) => {
//       t.truthy(res.body.data)
//       t.true(res.body.data.length > 0)
//     })
//
// })
//
//
// // POST new
//
// test('API | Cats | It responds by adding a new cat', (t) => {
//   t.plan(1)
//
//   const tibbles = {
//     name: "tibbles"
//   }
//
//   return request(makeApp())
//     .post('/api/v1/cats/')
//     .send(tibbles)
//     .then((res) => {
//       return testKnex("cats")
//       .where({name: tibbles.name})
//       })
//     .then(rows => {
//       t.is(rows[0].name, tibbles.name)
//       })
//
// })
//
// // PUT
// test('API | Cats | It responds by editing the cat', (t) => {
//   t.plan(2)
//
//   const fluffyEdited = {
//     name: "fluffy2"
//   }
//
//   return testKnex('cats')
//     .where({name: 'fluffy'})
//     .select('*')
//     .then(rows => {
//       const id = rows[0].id
//       const postId = 'api/v1/cats/' + id
//       return request(makeApp())
//         .post(postId)
//         .send(fluffyEdited)
//     })
//     .then(res => {
//       return testKnex('cats')
//         .where({name: 'fluffy'})
//         .then(rows => {
//           t.is(rows.length === 0)
//         })
//     })
//     .then(res => {
//       return testKnex('cats')
//         .where({name: 'fluffy2'})
//         .then(rows => {
//           t.is(rows.length === 1)
//         })
//     })
// })
//
//
// // DELETE
//
// test('API | Cats | It responds by deleting the selected cat', (t) => {
//   t.plan()
//
//   return testKnex('cats')
//     .where({name: "fluffy"})
//     .then(rows => {
//       t.is(rows.length === 0)
//     })
//     //UNFINISHED
// })
