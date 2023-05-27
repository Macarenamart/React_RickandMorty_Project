const express = require('express');
const router = express.Router();

// Importa los modelos de datos
const User = require('../models/User');

// Ruta para el inicio de sesión (ejemplo)
router.post('/login', async (req, res) => {
  try {
    // Email y contraseña
    const { email, password } = req.body;

    // Verificacion email y contraseña
    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // datos correctos
    return res.status(200).json({ message: 'Inicio de sesión exitoso' });
  } catch (error) {
    console.error('Error en la autenticación:', error);
    return res.status(500).json({ message: 'Error en el servidor' });
  }
});



module.exports = router;
