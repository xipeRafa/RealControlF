import './header.css'
import img2 from "../../imgs/rc3.png";


export default function Header() {


    return ( <> 

  <header>
        <p>35 AÑOS DE EXPERIENCIA, CALIDAD Y EFECTIVIDAD EN EL CONTROL DE PLAGAS</p>
        <p>SERVICIO DOMÉSTICO, COMERCIAL E INDUSTRIAL</p>
<p>Real Control pone a su servicio los mejores Productos y Equipos para un Servicio Completamente Profesional</p>
<p>Efectivo y con Resultados Inmediatos</p>
<span>SERVICIOS GARANTIZADOS HASTA 5 AÑOS</span>




        <div className="sombra">
        <img src={img2} />
      </div>

      <section className="tipoDePlagas">
        Hay Muchísimos Tipos de Plagas y cada una con Diferentes Especies del Mismo Problema
        <p>PERO ¡NO SE PREOCUPE!</p>

        ¡REAL CONTROL ES SU MEJOR OPCIÓN!
      </section>

      </header>
      </>)
  }


