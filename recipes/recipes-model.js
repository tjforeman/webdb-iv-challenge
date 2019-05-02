const db = require('../data/dbConfig.js')

module.exports={
getRecipes,
getRecipe,
addRecipe
}

function getRecipes(){
    return db('recipes')
  .join('dishes','dishes.id','recipes.dish_id')
  .select('recipes.id',{dish:'dishes.dish-name'},{recipe:'recipes.recipe-name'})
}

function getRecipe(id){
    return db('recipes')
    .where({id})
    .first();
}

function addRecipe(recipe){
    return db('recipes')
    .insert(recipe)
}