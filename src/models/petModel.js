const { DataTypes }= require('sequelize');

module.exports = (sequelize) => sequelize.define('Pet', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  species: {
    type: DataTypes.ENUM('dog', 'cat', 'other'),
    allowNull: false,
  },
  breed: DataTypes.STRING,
  birth_date: DataTypes.DATEONLY,
  vaccine_card: DataTypes.JSONB, // Guarda vacunas en formato JSON
}, { timestamps: true });

