const { sequelise, DataTypes } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  const Genres = sequelize.define(
    'Genres',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      // created_at: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },
      // updated_at: {
      //   type: DataTypes.STRING,
      //   timestamp: null
      // },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      ranking: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      active: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    },
    {
      // config table
      tableName: 'genres',
      underscored: true,
    },


    )
    Genres.associate = (models) => {
      Genres.hasMany(models.Movies,{
        as: 'movies',
        foreignKey: 'genre_id'
      })
    }
  return Genres
}
