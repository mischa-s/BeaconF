
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('farms').del()
    .then(function() {
      return Promise.all([
        // Inserts seed entries
        knex('farms').insert({id: 1, name: 'Skilleby Trädgård', location: 'Sweden', type: 'Small Holding', mainImage: 'http://www.skillebytradgard.se/wp-content/uploads/2016/06/cropped-SK-TR-LOGO-kopia-3.png'}),
        knex('farms').insert({id: 2, name: 'Triple-H-Beef', location: 'Canada', type: 'Cattle Ranch', mainImage: 'http://www.triple-h-beef.com/images/grazing-cows-for-email.jpg'}),
      ]);
    });
};
