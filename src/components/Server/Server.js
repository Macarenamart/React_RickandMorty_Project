const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middleware para analizar el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb+srv:<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })

//', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión a MongoDB exitosa');
  })
  .catch((error) => {
    console.error('Error al conectar a MongoDB:', error);
  });

// Definir rutas API
app.use('/api', require('./routes/api'));

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
