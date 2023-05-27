// De esta manera estamos creando un componente que si quisieramos podriamos reutilizar
import React from 'react';
import '../styles/navbar.css';
import LoginPage from './LoginPage';


//Hago un destructuring con el título, por si más adelante quiero modificarlo
//Hay que poner Navbar brand + titulo en App.js

const Navbar=({brand}) => {
  return (
    <nav className="navbar">
      <div>
        <a href="/" className="navbar-title">{brand}</a>
        <LoginPage/>
      </div>
    </nav>
  );
}

export default Navbar;
