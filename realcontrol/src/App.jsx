import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./css/App.css";
import img1 from "./imgs/rc1.jpg";
import img2 from "./imgs/rc3.png";

import {
  //Link,
  //Navigate,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Servicios from "./components/servicios/Servicios";
import Header from "./components/header/Header";
import Tipos from "./components/tipos/Tipos";
import Contacto from "./components/contacto/Contacto";



function App() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className="containerApp">
      <Navbar />

      <Routes>
        <Route path="/RealControlF/servicios" element={<Servicios />} />
        <Route path="/RealControlF/" element={<Header />} />
        <Route path="/RealControlF/tipos" element={<Tipos />} />
        <Route path="/RealControlF/contacto" element={<Contacto />} />

        <Route path="*" element={<Header />} />
      </Routes>

      <div className={location.pathname === '/RealControlF/tipos' || location.pathname === '/RealControlF/contacto' ? 'd-none' : ''}>

      <div className="sombra">
        <img src={img2} />
      </div>

      <section className="tipoDePlagas">
        Hay Muchísimos Tipos de Plagas y cada una con Diferentes Especies del
        mismo Problema
        <p>PERO ¡NO SE PREOCUPE! REAL CONTROL </p>

        Cuenta con el Equipo Adecuado para Solucionar todos ellos<br />
        <span>Si una plaga es su Problema, o desea Proteger su Casa</span>
        <br />
        ¡REAL CONTROL ES SU MEJOR OPCIÓN!
      </section>
      </div>

      <div className="sombra">
        <img src={img1} style={{ marginBottom: "20px" }} />
      </div>

      
      <Footer />
    </div>
  );
}

export default App;
