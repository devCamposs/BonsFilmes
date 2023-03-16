const { sequelise, DataTypes } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  const Movies = sequelize.define(
    'Movies',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      rating: {
        type: DataTypes.DECIMAL,
        allowNull: true
      },
      awards: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      release_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      length: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      genre_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      // config table
      tableName: 'movies',
      underscored: true,
    },
  )
  Movies.associate = (models) => {
    Movies.belongsTo(models.Genres, { // um filme pertence a um genero
      as: 'genre',
      foreignKey: 'genre_id'
    })
    // Movies.belongsToMany(models.Actor, {
    //   as: 'actors',
    //   through: 'actor_movie',
    //   foreignKey: 'movie_id',
    //   otherKey: 'actor_id',
    //   timestamps: false
    // })
  }
  return Movies
}
