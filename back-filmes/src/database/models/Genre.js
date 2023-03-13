const { sequelise, DataTypes } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define(
    'Genre',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      created_at: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      updated_at: {
        type: DataTypes.STRING,
        timestamp: null
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      ranking: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      active: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      // config table
      tableName: 'genres',
      underscored: true,
    },


    )
    Genre.associate = (models) => {
      Genre.hasMany(models.Movies,{
        as: 'movies',
        foreignKey: 'genre_id'
      })
    }
  return Genre
}
