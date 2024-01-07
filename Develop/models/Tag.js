const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns
    id: {
      type : DataTypes.INTEGER, // Set the Data type to INTEGER
      allowNull : false, // Prevent null values
      primaryKey : true, // Set as primary key
      autoIncrement : true // Automatically increment the value
    },
    tag_name : {
      type : DataTypes.STRING, //set the data type to STRING
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
