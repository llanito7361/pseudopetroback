const { User } = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const createUser = async (full_name, email, password, role) => {
    // cheking de si el usuario existe
    const existingUser = await User.findOne({ where: { email } })
    if (existingUser) {
        throw new Error('usuario ya existente pa')
    }
    // encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10)
    // crear el user en la db
    const newUser = await User.create({
        full_name,
        email,
        password: hashedPassword,
        role
    })
    // crear el token
    const token = jwt.sign(
        {
            userId: newUser.id,
            email: newUser.email,
        },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
    )
    return {
        user: {
            id: newUser.id,
            full_name: newUser.full_name,
            email: newUser.email,
            role: newUser.role,
        },
        token: token,
    }}
// retornar obj con datos relevantes


module.exports = {
    createUser,

}