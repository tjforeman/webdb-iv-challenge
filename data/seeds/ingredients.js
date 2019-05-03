
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {'ingredient_name': 'Tomatos'},
        {'ingredient_name': 'cheese'},
        {'ingredient_name': 'pasta'},
        {'ingredient_name': 'garlic'},
        {'ingredient_name': 'black-pepper'},
        {'ingredient_name': 'sasauge'},
        {'ingredient_name': 'peppers'},
        {'ingredient_name': 'rice'},
        {'ingredient_name': 'basil'},
        {'ingredient_name': 'oregano'},
        {'ingredient_name': 'onion', },
        {'ingredient_name': 'hamburger',},
      ]);
    });
};
