import React, { useEffect, useState } from "react";
import Personas from "./listaPersonas.js";

export default function Estadisticas() {
  const [MenorEdad, setMenorEdad] = useState(Infinity);
  const [MayorEdad, setMayorEdad] = useState(-Infinity);
  const [MenorNombres, setMenorNombres] = useState([]);
  const [MayorNombres, setMayorNombres] = useState([]);
  const [Cont, setCont] = useState(0);

  useEffect(() => {
    const personasMayoresDe35 = Personas.filter((persona) => persona.edad > 35);

    setCont(personasMayoresDe35.length);

    const edades = personasMayoresDe35.map((persona) => persona.edad);

    const menor = edades.reduce((min, edad) => (edad < min ? edad : min), Infinity);
    const mayor = edades.reduce((max, edad) => (edad > max ? edad : max), -Infinity);

    setMenorEdad(menor);
    setMayorEdad(mayor);

    const nombresMenor = personasMayoresDe35
      .filter((persona) => persona.edad === menor)
      .map((persona) => persona.nombre);

    setMenorNombres(nombresMenor);

    const nombresMayor = personasMayoresDe35
      .filter((persona) => persona.edad === mayor)
      .map((persona) => persona.nombre);

    setMayorNombres(nombresMayor);
  }, []);

  return (
    <>
      <h1>Estadísticas Page</h1>
      <div>
        <h2>Mayor Edad: {MayorEdad}</h2>
        <h2>Personas de Mayor Edad: {MayorNombres.join(", ")}</h2>
        <h2>Menor Edad: {MenorEdad}</h2>
        <h2>Personas de Menor Edad: {MenorNombres.join(", ")}</h2>
        <h2>Hay {Cont} personas mayores de 35 años</h2>
      </div>
    </>
  );
}