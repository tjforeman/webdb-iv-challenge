const db = require('../data/dbConfig.js')

module.exports={
getDishes,
getDish,
addDish
}

function getDishes(){
    return db('dishes')
}
function getDish(id){
    return db('dishes')
    .join('recipes','dishes.id','recipes.dish_id')
    .select({name:'dishes.dish-name'},{recipe:'recipes.recipe-name'})
    .where({"dishes.id": id })
  }
function addDish(dish){
    return db('dishes')
    .insert(dish)
}