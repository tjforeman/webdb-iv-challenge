
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {'recipe-name': 'New York style','dish_id':1,'ingredient_id':(1,2,3,5,6)},
        {'recipe-name': 'Deep Dish', 'dish_id':1,'ingredient_id':2},
        {'recipe-name': 'boiled', 'dish_id':2,'ingredient_id':3},
        {'recipe-name': 'fried','dish_id':2,'ingredient_id':4},
        {'recipe-name': 'authentic-style', 'dish_id':3,'ingredient_id':5},
        {'recipe-name': 'american-style','dish_id':3,'ingredient_id':6},
        {'recipe-name': 'alla romana', 'dish_id':4,'ingredient_id':7},
        {'recipe-name': 'new and improved', 'dish_id':4,'ingredient_id':8},
        {'recipe-name': 'family-style', 'dish_id':5,'ingredient_id':9},
        {'recipe-name': 'resturant-style','dish_id':5,'ingredient_id':10},
        {'recipe-name': 'sweet', 'dish_id':6,'ingredient_id':11},
        {'recipe-name': 'spicy','dish_id':6,'ingredient_id':12},
      ]);
    });
};

//          {'ingredient-name': 'Tomatos'},1
//         {'ingredient-name': 'cheese'},2
//         {'ingredient-name': 'pasta'},3
//         {'ingredient-name': 'garlic'},4
//         {'ingredient-name': 'black-pepper'},5
//         {'ingredient-name': 'sasauge'},6
//         {'ingredient-name': 'peppers'},7
//         {'ingredient-name': 'rice'},8
//         {'recipe-name': 'basil'},9
//         {'ingredient-name': 'oregano'},10
//         {'ingredient-name': 'onion', },11
//         {'ingredient-name': 'hamburger',},12