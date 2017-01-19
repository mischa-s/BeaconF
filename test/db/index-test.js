const test = require('ava')
const seedCats = require('../../db/seed-cats')

// instantiate test database and routes
const testKnex = require('knex')(require('../../knexfile').test)
const db = require('../../db')(testKnex)

//migrate the latest cats database table
test.beforeEach(() => {
  console.log('migrating....')
  return testKnex.migrate.latest()
    .then(() => {
      console.log('seeds....')
      return testKnex.seed.run()
    })
})

//rollback to the original state of the database
test.afterEach.always(() => {
  return testKnex.migrate.rollback()
})

//TEST 1 - gets all the cats table data, then checks each row has an idea (truthy) and then checks the name in the row matches the index of the seed data.
test('find | responds with a list of cats', (t) => {
  t.plan(4)

  return db.find('cats', {})
    .then((cats) => {
      console.log('cats', cats)
      cats.forEach((cat, i) => {
        t.truthy(cat.id)
        t.is(cat.name, seedCats[i].name)
      })
    })
})

//TEST 2 - checks that the method will insert a new cat into the cats table
test.only('add | inserts a cat into the database', (t) => {
  t.plan(2)

  // arrange
  const tibbles = {
 //   image: 'https://files.graphiq.com/stories/t2/tiny_cat_12573_8950.jpg',
    name: 'tibbles'
  //  age: 1
  }

  // action
  return db.add('cats', tibbles)
    .then((cats) => {
      // assert
      t.is(cats.length, 3)
      t.is(cats[2].name, tibbles.name)
    })
})


//TEST 3 - check that a cat record can be deleted from the cats table

test('delete | deletes a cat from the database', (t) => {
  t.plan(1)

  // arrange
  const catName = "fluffy"


  // action
  return db.delete('cats', catName)
    .then((cats) => {

      console.log('cats', cats)
      cats.forEach((cat, i) =>{
        t.not(cat.name, catName, "The cat has been successfully deleted") //assert
      })
    })
})



//TEST 4 - check that a cat can be edited
test("edit| edit a cat's information",(t)=>{
  t.plan(1)

  //arrange
  const editedData = {
    id:1,
    name: 'Persy'
  }

  //action
  return db.edit('cats', editedData)
    .then((cats)=>{
      return testKnex('cats')
        .where('id', editedData.id)
        .select()
        console.log('cats', cats)
      })
      .then(function(rows){
        //assert
        t.is(rows[0].name, editedData.name,"catname 'tick' has now changed to Percy")
      })
})


//TEST 5 - checks the database for a specific cat
test('search | searches for a specific cat by name',(t)=>{
  t.plan(1)

  //arrange
  const searchName = 'fluffy'

  const expected = {
    id :2,
    name: 'fluffy'
  }

  //action
  return db.search('cats',searchName)
  .then(function(cats){
    return testKnex('cats')
    .where('name', searchName)
    .select()
  })
  .then(function(rows){
    //assert
    t.is(rows[0],expected,"returns the searched cat data")
  })
})
