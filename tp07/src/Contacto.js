import React from "react";
import "./Contacto.css";

export default function Contacto() {
  return (
    <div className="contacto-container">
      <h1>Contacto</h1>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="firstName">Nombre</label>
          <input type="text" id="firstName" name="firstName" required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Apellido</label>
          <input type="text" id="lastName" name="lastName" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="edad">Edad</label>
          <input type="number" id="edad" name="edad" required />
        </div>
        <div className="form-group">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}