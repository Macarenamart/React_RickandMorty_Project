import '../styles/loginPage.css';
import React, { useState } from 'react';
import axios from 'axios';
const User = require('../models/User');

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Verificar las credenciales del usuario en la base de datos
      const user = await User.findOne({ email });

      if (user && user.password === password) {
        // Credenciales válidas, realizar acciones adicionales
        console.log('Datos correctos. Usuario autenticado.');
        // Realiza una solicitud POST al backend
        const response = await axios.post('/api/login', { email, password });
        console.log(response.data); 
      } else {
        // Credenciales inválidas, mostrar un mensaje de error
        console.log('Datos no válidos');
      }
    } catch (error) {
      console.error(error);
      // Error problemas con la base de datos
    }
  };

  return (
    <div className="loginPage">
      <h1 className="loginPage-title">· Login Rick and Morty app  ·</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="username" 
          placeholder="Email"
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Contraseña" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="button-container">
          <button type="submit" className="accept-button">
            Aceptar
          </button>
          <button type="button" className="delete-button">
            Borrar
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;


