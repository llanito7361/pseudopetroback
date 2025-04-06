const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Token faltante' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // { id, role, email, etc }
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token inválido o expirado' });
  }
};

module.exports = verifyToken;
