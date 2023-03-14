const db = require('../database/models')
const Actor = db.Actors

const actorController = {

  actorList: (req, res) =>{
    Actor.findAll()
    .then(actors =>{
      res.status(200).json(actors)
    })
    .catch(err =>{
      res.status(500).json(err)
    })
  },

  //***** BUSCAR POR ID *****/

  actorId: (req, res)=> {
    const {id} = req.params
    Actor.findByPk(id)
    .then(actors =>{
      res.status(200).json(actors)
    })
    .catch(err =>{
      res.status(500).json(err)
    })
  },

 // ***** CREATE *****

  actorCreate: async (req, res) => {
    const {first_name, last_name, rating, favorite_movie_id} = req.body

    try{
      await Actor.create(
        {first_name, last_name, rating, favorite_movie_id}
      )
      res.status(200).json({msg: 'Ator criado com sucesso!'})
    } catch (err){
      res.status(500).json(err)
    }
  },

  // ***** EDITAR *****

  actorUpdate: async (req, res) => {
    const id = req.params.id
    const actors = req.body

    try{
      await Actor.update(actors, {where: {id}})
      res.status(200).json({msg: 'Ator editado com sucesso'})
    } catch (err) {
      res.status(500).json(err)
    }
  },

  actorDelete: async (req, res) => {
    const id = req.params.id
    try{
      await Actor.destroy({where: {id}})
      res.status(200).json({msg: 'Ator deletado com sucesso'})
    } catch (err) {
      res.status(500).json(err)
    }
  }



}

module.exports = actorController
