const db = require('../database/models')
const Genre = db.Genres

const genresController = {

  genresList: (req, res) => {
    Genre.findAll()
      .then(genres => {
        res.status(200).json(genres)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  },

  genresId: (req, res) => {
    const { id } = req.params
    Genre.findByPk(id)
      .then(genres => {
        res.status(200).json(genres)
      })
      .catch(err => {
        res.status(200).json(err)
      })
  },

  genresEdit: async (req, res) => {
    const id = req.params.id
    const genres = req.body

    try {
      await Genre.update(genres,
        {
          where: { id }
        })
      res.status(201).json({ msg: 'Genero editado com sucesso' })
    } catch (err) {
      res.status(500).json(err)
    }
  },

  genresCreate: async (req, res) => {
    const { name, ranking, active } = req.body

    try {
      await Genre.create(
        {
          name,
          ranking,
          active
        })
      res.status(201).json({ msg: 'Genero criado com sucesso!' })
    } catch (err) {
      res.status(500).json(err) // 400 = Bad Request
    }

  },

  delete: async (req, res) => {
    const id = req.params.id
    try {
      await Genre.destroy(
        {
          where: {id}
        }
      )
      res.status(200).json({msg: 'Genero excluído com sucesso!'})
    } catch (err) {
      res.status(400).json({error: [...err]})
    }
  },

}

module.exports = genresController
