const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../config/db');
const { JWT_SECRET } = process.env;

const SALT_ROUNDS = 10;

async function registerHandler(req, res) {
  const { full_name, email, password, role } = req.body;

  try {
    if (!full_name || !email || !password) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Ya existe un usuario con ese email' });
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const newUser = await User.create({
      full_name,
      email,
      password: hashedPassword,
      role: role || 'user',
    });

    const token = jwt.sign(
      { id: newUser.id, role: newUser.role, email: newUser.email },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.status(201).json({
      message: 'Usuario registrado exitosamente',
      user: {
        id: newUser.id,
        full_name: newUser.full_name,
        email: newUser.email,
        role: newUser.role
      },
      token
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar usuario', detail: error.message });
  }
//  {
  // "full_name": "emanuel godoy",
  // "role": "client",
  // "email": "ema@asd.com",
  // "password": "123"
// }

}

async function loginHandler(req, res) {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ error: 'Faltan email o contraseña' });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ error: 'Usuario no encontrado' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role, email: user.email },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.status(200).json({
      message: 'Login exitoso',
      user: {
        id: user.id,
        full_name: user.full_name,
        email: user.email,
        role: user.role
      },
      token
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al hacer login', detail: error.message });
  }
  // {
    // "email": "ema@asd.com",
    // "password": "123"
  // }
}

async function getMeHandler(req, res) {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: ['id', 'full_name', 'email', 'role']
    });

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuario', detail: error.message });
  }
}

module.exports = {
  registerHandler,
  loginHandler,
  getMeHandler
};
