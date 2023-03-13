const db = require('../database/models')
const Movies = db.Movies


const moviesController = {

  list: (req, res) => {
    Movies.findAll()
      .then(movies => {
        res.status(200).json(movies)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  },


  // ***** POR ID *****
  getById: (req, res) => {
    const { id } = req.params
    Movies.findByPk(id)
      .then(movie => {
        res.status(200).json(movie)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  },

  // **** CRIAR *****
  create: async (req, res) => {
    const { title, rating, awards, release_date, length, genre_id } = req.body

    try {
      await Movies.create({ title, rating, awards, release_date, length, genre_id })
      res.status(201).json({ msg: 'Filme criado com sucesso!' })
    } catch (err) {
      res.status(500).json(err) // 400 = Bad Request
    }
  },
  // ***** EDITAR ****

update: async (req, res) => {
  const id = req.params.id
  const movies = req.body

  try {
    await Movies.update(movies, {where: {id}})
    res.status(201).json({msg: 'Produto alterado com sucesso'})
  } catch (err) {
    res.status(500).json({error: [...err]})
  }
},

  // ***** DELETE *****
  delete: async (req, res) => {
    const id = req.params.id
    try {
      await Movies.destroy({ where: { id } })
      res.status(200).json({ msg: 'Filme excluído com sucesso!' })
    } catch (err) {
      res.status(400).json({ error: [...err] })
    }
  }

}


module.exports = moviesController
