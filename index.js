require('dotenv').config()
const server = require('./src/app');
const {conn} = require('./src/config/db.js');  // Importa conn

const PORT = process.env.PORT || 3000;

// Conectar a la DB antes de iniciar el servidor
conn.sync({force:false})
    .then(() => {
        // console.log('✅ Conectado a la base de datos');
        server.listen(PORT, () => {
            console.log(`server on port http://localhost:${PORT}`);
        });
    })
    // .catch(err => {
    //     console.error(' No se pudo conectar a la DB:', err);
    // });


    // server.listen(PORT,()=>{
    //     console.log('server on port http://localhost:${PORT}');
    // })