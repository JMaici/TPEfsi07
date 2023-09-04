
import ReactDOM from "react-dom/client";
import {  Text } from "react-router-dom";
import Personas from "./listaPersonas.js";
import { useEffect, useState } from "react";


export default function Estadisticas() {
  let [MenorEdad, setMenorEdad] = useState(Infinity);
  let [MayorEdad, setMayorEdad] = useState(-Infinity);
  let [MenorNombres, setMenorNombres] = useState([]);
  let [MayorNombres, setMayorNombres] = useState([]);
  let [Cont, setCont] = useState(0);
  useEffect(() =>{
    Personas.forEach(persona => {
    if(persona.edad > 35){
      setCont(Cont++);
    }
    if(persona.edad < MenorEdad){
      setMenorEdad(persona.edad);
      console.log(MenorEdad)
      setMenorNombres([persona.nombre])
    }
    else if(persona.edad === MenorEdad){
      setMenorNombres(prevMenorNombres => [...prevMenorNombres, " " + persona.nombre])
    }
    if(persona.edad > MayorEdad){
      setMayorEdad(persona.edad);
      setMayorNombres([persona.nombre])
    }
    else if(persona.edad === MayorEdad){
      setMayorNombres(prevMayorNombres => [...prevMayorNombres, " " + persona.nombre])
    }
  });

  }, []);
 

  return (
    <>
        <h1>estadisticas Page</h1>
        <div>
            <h2>{MayorEdad}</h2>
            <h2>{MayorNombres}</h2>
            <h2>{MenorEdad}</h2>
            <h2>{MenorNombres}</h2>
            <h2>{Cont}</h2>
        </div>
    </>
  );
}

