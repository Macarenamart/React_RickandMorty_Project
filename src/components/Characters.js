import React from 'react'
import '../styles/characters.css';

const Characters = ({ characters = [] }) => {
    return (
      <div className="row">
        {characters.map((item, index) => (
          <div key={index} className="column">
            <div className="card">
              <img src={item.image} alt="" />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <hr/>
                <p className="card-text">Localización:{item.location.name}</p>
                <p className="card-text">{item.species}</p>

              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Characters;