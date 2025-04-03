const{ DataTypes }=require('sequelize');

const BookingModel = (sequelize) => sequelize.define('Booking', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  status: {
    type: DataTypes.ENUM('pending', 'confirmed', 'canceled'),
    defaultValue: 'pending',
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  service_type: DataTypes.STRING,
}, { timestamps: true });


module.exports = BookingModel;
