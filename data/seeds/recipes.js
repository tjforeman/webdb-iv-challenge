
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {'recipe-name': 'New York style', 'dish_id':1},
        {'recipe-name': 'Deep Dish', 'dish_id':1},
        {'recipe-name': 'boiled', 'dish_id':2},
        {'recipe-name': 'fried','dish_id':2},
        {'recipe-name': 'authentic-style', 'dish_id':3},
        {'recipe-name': 'american-style','dish_id':3},
        {'recipe-name': 'alla romana', 'dish_id':4},
        {'recipe-name': 'new and improved', 'dish_id':4},
        {'recipe-name': 'family-style', 'dish_id':5},
        {'recipe-name': 'resturant-style','dish_id':5},
        {'recipe-name': 'sweet', 'dish_id':6},
        {'recipe-name': 'spicy','dish_id':6},
      ]);
    });
};