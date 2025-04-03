const { Sequelize} = require('sequelize');
const {SUPABASE_POOLER_CONECTION} = process.env;

//          PARA VER Y COMPARAR
// const url_pooler = 'postgresql://postgres.zioaivhkxfusdhjtklxb:[petropolis]@aws-0-us-east-2.pooler.supabase.com:6543/postgres'
//                 'postgres://postgres.zioaivhkxfusdhjtklxb:petropolis@aws-0-us-east-2.pooler.supabase.com:6543/postgres'
const sequelize = new Sequelize(SUPABASE_POOLER_CONECTION,
    {
        dialect: 'postgres',
        logging: false,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false, // Necesario para evitar problemas con certificados SSL
            },
        },
    }
);

const petModel = require('../models/petModel');
const userModel = require('../models/userModel');
const bookingModel = require('../models/bookingModel');

userModel(sequelize)
petModel(sequelize)
bookingModel(sequelize)

// Un usuario puede tener muchas mascotas
// User.hasMany(Pet, { foreignKey: 'userId', onDelete: 'CASCADE' });
// Pet.belongsTo(User, { foreignKey: 'userId' });

// // Un usuario puede tener muchas reservas
// User.hasMany(Booking, { foreignKey: 'userId', onDelete: 'CASCADE' });
// Booking.belongsTo(User, { foreignKey: 'userId' });

// // Una mascota puede estar en muchas reservas
// Pet.hasMany(Booking, { foreignKey: 'petId', onDelete: 'CASCADE' });
// Booking.belongsTo(Pet, { foreignKey: 'petId' });

// // Una reserva puede tener muchas notificaciones
// Booking.hasMany(Notification, { foreignKey: 'bookingId', onDelete: 'CASCADE' });
// Notification.belongsTo(Booking, { foreignKey: 'bookingId' });

// // Un usuario puede recibir muchas notificaciones
// User.hasMany(Notification, { foreignKey: 'userId', onDelete: 'CASCADE' });
// Notification.belongsTo(User, { foreignKey: 'userId' });

const {User, Pet,Notification, Booking}=sequelize.models

// // Probar conexión
// sequelize.authenticate()
//     .then(() => console.log('✅ Conexión a Supabase exitosa'))
//     .catch(err => console.error('❌ Error de conexión:', err));

module.exports = {
    conn: sequelize,
    ...sequelize.models
    // Agrega aquí otros modelos si es necesario        
};
