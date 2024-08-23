import './tecnicas.css'

// import img1 from './1.png'
// import img2 from './2.png'
// import img3 from './3.png'
// import img4 from './4.png'

import { useState } from "react";

export default function Tecnicas() {


  const[displayState, setDisplayState]=useState('1')

  return (
    <div className='inicioContainer'>
        <div className='titulo'>
            <h4>REAL CONTROL</h4>
            <h2>TECNICAS DE FUMIGACIÓN</h2>
        </div>


        <div className='buttonsContainer'>
            <button className={displayState === '1' ? 'bg-dark' : 'bg-ligth'} onClick={()=>setDisplayState('1')}>ASPERSION</button>
            <button className={displayState === '2' ? 'bg-dark' : 'bg-ligth'} onClick={()=>setDisplayState('2')}>NEBULIZACION</button>
            <button className={displayState === '3' ? 'bg-dark' : 'bg-ligth'} onClick={()=>setDisplayState('3')}>GASIFICACION</button>
            <button className={displayState === '4' ? 'bg-dark' : 'bg-ligth'} onClick={()=>setDisplayState('4')}>APLICACIÓN DE GEL</button>
        </div>


        <div className={displayState !== '1' ? 'd-none' : 'displayX'}>
           {/* <div>
              <img src={img4} />
            </div>  */}           
            <div>
                    <h3>      
                        ASPERSION<br />
                        Método mediante el cual se esparce pequeñas gotas de plaguicida 
                        <br />mediante un equipo de presión con boquilla en forma de abanico rociando las orillas inferiores y superiores, 
                        marcos siguiendo el perímetro del establecimiento poniendo especial atención en rincones, grietas, hendiduras, 
                        lugar donde se anidan las plagas formando así un cordón sanitario y evitando el 
                        ingreso o propagación de las plagas no deseadas. Este método es el más efectivo y u
                        sados por las mayoría de empresas de fumigación
                    </h3>
            </div>                    
        </div>




        <div className={displayState !== '2' ? 'd-none' : 'displayX'}>
        {/*<div>
              <img src={img3} />
            </div> */} 
            
            <div>
                   
                  <h3>
                        NEBULIZACION<br /> Son equipos eléctricos<br /> es como el sistema de aspersión con líquido pero esparce 
                        partículas mucho más finas que forman una especie de nube fría, lo cual le confiere gran poder 
                        de penetración. Ideal para el control de insectos voladores.
                  </h3>
                  
            </div> 
        </div>


        <div className={displayState !== '3' ? 'd-none' : 'displayX'}>

            {/* <div>
                <img src={img1}/>
            </div>  */}           
            <div>
                  
                  <h3>
                    GASIFICACION PARA TERMITAS Y OTRAS INSECTOS<br /> Técnica por el cual se realiza un 
                    sellamiento total del área infestada de plaga para que no pueda salir ninguna partícula del veneno, 
                    y se introduce una pastilla que contienen un tipo de gas venenoso causando envenenamiento o asfixia en la plaga, 
                    lo usamos comúnmente cuando existe un problema de termita o cualquier tipo de insecto que no se 
                    puede tratar con métodos antes mencionados.
                  </h3>
                 

            </div> 
        </div>


        <div className={displayState !== '4' ? 'd-none' : 'displayX'}>

          {/*   <div>
                <img src={img2}/>
            </div>  */}           
            <div>
                
                  <h3>
                      
                      APLICACIÓN DE GEL<br /> Se lleva a cabo en lugares localizados donde prolifera la plaga principalmente cucaracha en lugares que 
                      tenemos menor acceso a la limpieza como lo son: cocinas, interior de tubos, grietas esquinas, hendiduras entrepaños, alacenas, 
                      cajones hornillas, y todo tipo de equipos eléctricos, etc. 
                      Esta técnica es muy utilizada en la Industria alimenticia en donde se hace énfasis en la inocuidad alimentaria.
                  </h3>
                 

            </div> 
        </div>

    </div>
  )
}

  