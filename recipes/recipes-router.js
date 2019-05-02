const router = require('express').Router();

const Recipes= require('./recipes-model.js')

router.post('/', (req, res) => {
    if (!req.body.dish_id){
        res.status(400).json({message:'A dish_id is required to add a recipe'})
    }else{
        Recipes.addRecipe()
    .insert(req.body,'id')
    .then(recipe =>{
      res.status(200).json(recipe)
    })
    .catch(err=>{
      res.status(500).json({ message:'unable to add recipe at this time'})
    })
}
  });

router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipes =>{
      res.status(200).json(recipes);
    })
     .catch(err =>{
      res.status(500).json({ message:'unable to get the Recipes at this time'});
     }) 
  });

  router.get('/:id', (req, res) => {
    Recipes.getRecipe(req.params.id)
    .then(recipe=>{
      if(recipe){
      res.status(200).json(recipe)
      }else{
        res.status(404).json({message:'the specified Recipe does not exist'})
      }
    })
    .catch(err =>{
      res.status(500).json({message:'unable to get the Recipe at this time'})
    })
  });

module.exports=router
