const express = require('express');
const router = express.Router();
const User = require('./models/User'); // Importa el modelo de datos de usuario

// Ruta que usamos para el inicio de sesión
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Verificar las credenciales en MongoDB
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Datos de acceso incorrectos' });
    }

    // Autenticación exitosa
    return res.status(200).json({ message: 'Inicio de sesión correcto' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error en el servidor' });
  }
});

module.exports = router;
