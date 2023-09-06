import React from "react";
import Personas from "./listaPersonas.js";
import { useState } from "react";
import { Link, useSearchParams } from 'react-router-dom';
import "./Home.css"; // Importa el archivo de estilo CSS


export default function Home() {

  const [selectedPersona, setSelectedPersona] = useState(null)

 const handleClick=(persona)=>{
  setSelectedPersona(persona)
  }


  return (
    <div className="container">
      <h1>Personas</h1>
      <div>
      <Link to={`/estadisticas`}>AAAAAAAAA</Link>
      </div>
      <div className="card-container">
        {Personas.map((persona) => (
          <div className="card" key={persona.id} onClick={() => handleClick(persona)}>
            <h2>
              <Link className="personaName" to={`/persona/${persona.id}`}>
                {persona.nombre + " "} 
                {persona.apellido}
              </Link>
              </h2>
            <p>Hace click en el nombre para ver mas detalles</p>
            
          </div>
        ))}
      </div>
    </div>
  );
}