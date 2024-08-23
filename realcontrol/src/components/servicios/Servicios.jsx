import "./servicios.css";
import { useState } from "react";
import Tecnicas from '../tecnicas/Tecnicas'


export default function Servicios() {


  const[boolState, setBoolState]=useState(true)






  return (<>

  {boolState ?
    <p className="servicios1">
      La experiencia obtenida durante 35 años de Servicio nos coloca como la
      solución adecuada
      <br />
      para cualquier tipo de problema de plagas, tomando siempre en cuenta su
      salud y la de su familia
      <br />
      nuestros técnicos son especialistas en proteger su hogar usando
      productos y equipos adecuados para el Trabajo
      <br />
      siguiendo las más estrictas normas de uso y calidad.
      <span className={boolState ? 'leerMas':'d-none'} onClick={()=>setBoolState(!boolState)}>Leer Mas..</span>
    </p>




    :




     <p className="servicios1">
      La experiencia obtenida durante 35 años de Servicio nos coloca como la
      solución adecuada
      <br />
      para cualquier tipo de problema de plagas, tomando siempre en cuenta su
      salud y la de su familia
      <br />
      nuestros técnicos son especialistas en proteger su hogar usando sólo los
      productos y equipos adecuados para el Trabajo
      <br />
      siguiendo las más estrictas normas de uso y calidad. 
      <br />
      <br />
      <p>Fumigación contra Termita ¡No se nos escapa ni una! </p>
      Además te aseguramos que contamos con el equipo adecuado para no dañar las
      áreas infectadas
      <br />
      Fumigación contra bichos rastreros y voladores – deshágase de una vez de
      las molestas cucarachas,
      <br />
      arañas y hormigas, también solucionamos pestes de mosquitos, moscas ¡y
      hasta palomas!
      <br />
      Tratamiento contra todo tipo de Roedores <br />
      <br /> Elimina de tu hogar los huéspedes indeseados y protégelo de futuros
      intentos de invasores
      <br />
      <br />
      TU CASA SEGURA <br /> Siempre procurando ofrecer el mejor servicio,
      utilizamos los productos con las más estrictas normas de protección
      <br />
      para su hogar, no dañamos superficies, plantas o alimentos.
      <br />
      <br />
      CONTAMOS CON EQUIPOS ESPECIALIZADOS Y TECNICOS ESPECIALISTAS <br />{" "}
      CERTIFICADOS PARA CUMPLIR CON EL SERVICIO ADECUADAMENTE.
      <p className={!boolState ? 'leerMas':'d-none'} onClick={()=>setBoolState(!boolState)}>Leer Menos..</p>
    </p>}

<hr />
    <Tecnicas />
    <hr />

  </>);
}
