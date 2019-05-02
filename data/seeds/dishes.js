
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {'dish-name': 'pizza'},
        {'dish-name': 'ravioli'},
        {'dish-name': 'carbonara'},
        {'dish-name': 'cacio e pepe'},
        {'dish-name': 'arancini'},
        {'dish-name': 'ragu alla napoletana'}
      ]);
    });
};
