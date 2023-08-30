import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Contacto from "./Contacto";
import NoPage from "./NoPage";
import Estadisticas from './Estadisticas';
import DetallePersona from './DetallePersona';

function App() {

  
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="estadisticas" element={<Estadisticas />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="persona/:id" element={<DetallePersona/>}/>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
