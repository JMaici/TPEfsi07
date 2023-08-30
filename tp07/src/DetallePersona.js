import React from "react";
import Personas from "./listaPersonas.js";
import { useParams } from "react-router-dom";
import "./DetallePersona.css"; // Importa el archivo de estilo CSS

export default function DetallePersona() {
  const { id } = useParams();
  const persona = Personas.find((p) => p.id === id);

  if (!persona) {
    return <p>Persona no encontrada</p>;
  }

  return (
    <div className="detalle-container">
      <h1 className="nombre">
        Detalles de {persona.nombre} {persona.apellido}
      </h1>
      <div className="info">
        <p>
          <strong>Email:</strong> {persona.email}
        </p>
        <p>
          <strong>Edad:</strong> {persona.edad} años
        </p>
        {/* Puedes agregar más detalles aquí si los tienes */}
      </div>
    </div>
  );
}