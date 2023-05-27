import React from 'react'
import '../styles/pages.css';



const Pages = ({prev, next, onPrevious, onNext}) => {

//Constante para que el botón vaya a la pagina anterior

const handlePrevious=()=>{
  onPrevious();



}

const handleNext=()=>{
  onNext();


}


  return (

    //Ternario para decirle que si no hay página antes no muestre ni el boton
    <nav>
      <ul className="Pages">

    
      {
        prev ? (
        <li className="page-item">
          <button onClick={handlePrevious}>Atras</button>
        </li>
        ) :
        null}


        {
          next ? (
        <li className="page-item">
          <button onClick={handleNext}>siguiente</button>
        </li> 
        ):
        null
      }
      </ul>
    </nav>
  )
}

export default Pages
