const { DataTypes } = require ('sequelize');
import sequelize from './index.js';
import User from './user.js';
import Booking from './booking.js';

module.exports = (sequelize) => sequelize.define('Notification', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  seen: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, { timestamps: true });

Notification.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });
User.hasMany(Notification, { foreignKey: 'userId' });

Notification.belongsTo(Booking, { foreignKey: 'bookingId', onDelete: 'CASCADE' });
Booking.hasMany(Notification, { foreignKey: 'bookingId' });

