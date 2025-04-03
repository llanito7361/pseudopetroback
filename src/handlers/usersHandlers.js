const {User} = require('../config/db');
const {createUser} = require('../controllers/userController.js')

async function getUsersHandler (req, res) {
    res.send('para traer todos los usuarios')
}
async function getSingleUserHandler (req, res) {
    const {id} = req.params;
    res.send(`para traer un usuario de id: ${id}`)
}
async function updateUserHandler (req,res) {
    const {} = req.body;
    res.send('para actualizar usuario')
}
async function removeUserHandler (req,res){
    res.send('para eliminar usuario')
}
async function createUserHandler (req,res) {
    const {full_name, email, password, role} = req.body;
    try {
        const newUser = await createUser(
            full_name,
            email,
            password,
            role
        )
        res.status(200).send('para crear usuario')
    } catch (error) {
        res
    }
    
}

module.exports = {
    getUsersHandler,
getSingleUserHandler,
updateUserHandler,
removeUserHandler,
createUserHandler,
}