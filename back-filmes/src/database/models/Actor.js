const { sequelise, DataTypes } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  const Actor = sequelize.define(
    'Actors',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      // created_at: {
      //   type: DataTypes.STRING,
      //   timestamp: null,
      // },
      // updated_at: {
      //   type: DataTypes.STRING,
      //   timestamp: null
      // },
      first_name: {
        type: DataTypes.STRING
      },
      last_name: {
        type: DataTypes.INTEGER
      },
      rating: {
        type: DataTypes.DECIMAL
      },
      favorite_movie_id: {
        type: DataTypes.INTEGER
      },
    },
    {
      // config table
      tableName: 'Actors',
      underscored: true,
    },


    )
    // Actor.associate = function(models) {
    //   Actor.belongsToMany(models.Movies,{
    //     as: 'movies',
    //     through: 'actor_movie',
    //     foreignKey: 'actor_id',
    //     otherKey: 'movie_id',
    //     timestamps: false
    //   })
    // }
  return Actor
}
