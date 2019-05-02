const router = require('express').Router();

const Dishes= require('./dishes-model.js')

router.get('/', (req, res) => {
    Dishes.getDishes()
    .then(dishes =>{
      res.status(200).json(dishes);
    })
     .catch(err =>{
      res.status(500).json({ message:'unable to get the dishes at this time'});
     }) 
  });

  router.get('/:id', (req, res) => {
    Dishes.getDish(req.params.id)
    .then(dish=>{
      if(dish){
      res.status(200).json(dish)
      }else{
        res.status(404).json({message:'the specified dish does not exist'})
      }
    })
    .catch(err =>{
      res.status(500).json({message:'unable to get the dish at this time'})
    })
  });

module.exports=router
