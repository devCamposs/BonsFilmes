const db = require('../database/models');
const Usuario = db.Usuario;

const usuarioController = {
    list: (req, res) => {
        Usuario.findAll()
            .then((usuarios) => {
                res.status(200).json(usuarios)
            })
            .catch(err => {
                res.status(500).json(err); // 500 = Internal Error
            })
    },

    // POR ID

    findById: (req, res) => {
      Usuario.findByPk(req.params.id)
        .then(usuarios => {
            if (!usuarios){
                res.status(404).json(usuarios) // 404 = Not Found
            }else{
                res.status(200).json(usuarios)
            }

        })
        .catch(err => {
            res.status(404).json(err)
        })
    },

    //CRIAR

    create: async (req, res) => {
        const usuarios = req.body
        console.log(usuarios);
        try {
          await Usuario.create(usuarios)
          res.status(201).json({ msg: 'Usuario criado com sucesso!' })
        } catch (err) {
          res.status(400).json(err) // 400 = Bad Request
        }
    },

    delete: async (req, res) => {
      const id = req.params.id
      try {
        await Usuario.destroy({ where: { id } })
        res.status(200).json({ msg: 'Usuario excluído com sucesso!' })
      } catch (err) {
        res.status(400).json({ error: [...err] })
      }
    }
}

module.exports = usuarioController;
