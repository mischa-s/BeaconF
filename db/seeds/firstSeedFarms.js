exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('farms').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('farms').insert({id: 1, name: 'Skilleby Trädgård', location: 'Sweden', type: 'Small Holding', mainImage: 'http://www.skillebytradgard.se/wp-content/uploads/2016/06/cropped-SK-TR-LOGO-kopia-3.png', latitude: '59.0442751', longitude: '17.5959056'}),
        knex('farms').insert({id: 2, name: 'Triple-H-Beef', location: 'Canada', type: 'Cattle Ranch', mainImage: 'http://www.triple-h-beef.com/images/grazing-cows-for-email.jpg', latitude: '50.9785995', longitude: '256'}),
        knex('farms').insert({id: 3, name: 'Tablehurst', location: 'England', type: 'Mixed Use', mainImage: 'http://tablehurst.farm/wp-content/uploads/2014/02/tablehurst-video-web-768x316.jpg', latitude: '51.0984584', longitude: '0.0442316'})
      ])
    })
}
