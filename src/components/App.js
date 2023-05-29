//Importacion useEffect para el fetch que es la llamada a la Api
//useState para ver los datos en la página además de por la consola
import React,{useEffect, useState} from "react";
import Navbar from "./Navbar";
import Characters from "./Characters";
import Pages from "./Pages";


//Llamo a la Api con un fetch
//



function App() {

//Creación de estado de la app que nos permitirá ver los datos

const [characters, setCharacters] = useState([]);

const [info, setInfo] = useState({});

//Constante quque contiene la url inicial

const initialUrl="https://rickandmortyapi.com/api/character";

//Función que va a ser la encargada de realizar la llamada de red y colocamos dentro el fetch
//Url como parámetro de entrada (para eso hice arriba lo de const url)
  const fetchCharacters = (url) => {
    fetch(url)
         .then(response =>response.json())
         .then(data =>{
          setCharacters(data.results)
          setInfo(data.info);

         } )
         .catch(error => console.log(error))

  };

const onPrevious =() => {
  fetchCharacters(info.prev);
}

const onNext =() => {
  fetchCharacters(info.next); 
}




  //Aqui llamamos a la función --- Parámetro url
useEffect (() => {
  fetchCharacters(initialUrl);
  
}, [])


//Characters va a tener una propiedad que recibe el array  de arriba para obtener todos los personajes
  return (
    <>
      <Navbar brand="Rick and Morty"/>

      <div className="characters">

      <Pages 
      prev={info.prev} 
      next={info.next} 
      onPrevious={onPrevious} 
      onNext={onNext}

      />

      <Characters characters={characters} />

       <Pages 
      prev={info.prev} 
      next={info.next} 
      onPrevious={onPrevious} 
      onNext={onNext}
        
      />

      </div>

     
        
      
    </>
    
  
  );
}


/*const express = require('express');
const app = express();

// Configurar el servidor para aceptar solicitudes JSON
app.use(express.json());

// Importar y utilizar las rutas de Routes.js
const routes = require('../routes/Routes');
app.use('/', Routes);

// Iniciar el servidor en el puerto 
const port = 3000; 
app.listen(port, () => {
  console.log(`Servidor en funcionamiento en el puerto ${port}`);
});*/


export default App;
