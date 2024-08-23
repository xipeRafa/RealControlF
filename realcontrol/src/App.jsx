import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import img1 from './imgs/rc1.jpg'
import img2 from './imgs/rc3.png'

import {
  //Link,
  //Navigate,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

  




import Footer from './components/footer/Footer'
import Tecnicas from './components/tecnicas/Tecnicas'
import Navbar from './components/navbar/Navbar'
import Servicios from './components/servicios/Servicios'
import Header from './components/header/Header'
import Tipos from './components/tipos/Tipos'
import Contacto from './components/contacto/Contacto'





function App() {

  return (
    <div className='containerApp'>

    <Navbar />
    




<Routes>

        <Route path="/RealControlF/servicios" element={<Servicios />} />
        <Route path="/RealControlF/" element={<Header />} />
        <Route path="/RealControlF/tipos" element={<Tipos />} />
        <Route path="/RealControlF/contacto" element={<Contacto />} />

         <Route path="*" element={ <Header />} />
    </Routes>


<img src={img2} style={{marginBottom:'20px'}}/> 

      <section className='tipoDePlagas'>
        
      
Hay muchísimos tipos de plagas y cada una con diferentes especies del mismo problema, 
<p>PERO ¡NO SE PREOCUPE! REAL CONTROL </p>
Cuenta con el equipo adecuado para solucionar todos ellos. Si una plaga es su problema, o desea proteger su casa 
<br />¡REAL CONTROL ES SU MEJOR OPCIÓN!
      </section>


  


<hr />


<Tecnicas />

<img src={img1} style={{marginBottom:'20px'}}/>

      <Footer />




    </div>
  )
}

export default App
