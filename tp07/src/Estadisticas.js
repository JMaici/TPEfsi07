import React, { useEffect, useState } from "react";
import './Estadisticas.css'
import Personas from "./listaPersonas.js";

export default function Estadisticas() {
  const [MenorEdad, setMenorEdad] = useState(Infinity);
  const [MayorEdad, setMayorEdad] = useState(-Infinity);
  const [MenorNombres, setMenorNombres] = useState([]);
  const [MayorNombres, setMayorNombres] = useState([]);
  const [Cont, setCont] = useState(0);

  useEffect(() => {
    const edades = Personas.map((persona) => persona.edad);

    const menor = edades.reduce((min, edad) => (edad < min ? edad : min), Infinity);
    const mayor = edades.reduce((max, edad) => (edad > max ? edad : max), -Infinity);

    setMenorEdad(menor);
    setMayorEdad(mayor);

    const personasMenor = Personas.filter((persona) => persona.edad === menor);
    const personasMayor = Personas.filter((persona) => persona.edad === mayor);

    const nombresMenor = personasMenor.map((persona) => persona.nombre);
    const nombresMayor = personasMayor.map((persona) => persona.nombre);

    setMenorNombres(nombresMenor);
    setMayorNombres(nombresMayor);

    const personasMayoresDe35 = Personas.filter((persona) => persona.edad > 35);
    setCont(personasMayoresDe35.length);
  }, []);


  return (
    <>
      <h1>Estadísticas</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mayor Edad</td>
            <td>{MayorEdad}</td>
            <td>{MayorNombres.join(", ")}</td>
          </tr>
          <tr>
            <td>Menor Edad</td>
            <td>{MenorEdad}</td>
            <td>{MenorNombres.join(", ")}</td>
          </tr>
          <tr>
            <td>Cant. Mayores de 35 años</td>
            <td>{Cont}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}