import "./clientes.css";

import tres from "../../imgs/3.png";

export default function Header() {
  return (
    <div className="clientes">
        <img src={tres} />

      

        <div className='clientesBanner'>
            <div><span>★</span>35 Años de Experincia</div>
            <div><span>★</span>+50,000 Residencias</div>
            <div><span>★</span>+10,000 Comercios</div>
            <div><span>★</span>LLamanos 662 1902558</div>
        </div>


    </div>
  );
}


