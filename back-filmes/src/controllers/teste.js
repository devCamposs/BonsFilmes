const teste = {

  upadate: async (req, res) =>{
    const { id } = req.params
    const { title, rating, awards, release_date, length, genre_id } = req.body

    try {
      await Movies.upadate({
        title,
        rating,
        awards,
        release_date,
        length,
        genre_id
      },
        { where: { id } })
      res.status(200).json( { msg: 'Filme editado com sucesso!' })
    } catch (err) {
      res.status(400).json({ error: [...err] })
    }
  }
}
