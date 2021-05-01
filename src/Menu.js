import React from 'react'
import './css/Estilo.css';
import { Link } from 'react-router-dom';
export const Menu = () => {
    return (
        <div className="menuinicial">
            
            <div className="titulo">
                <Link to="/">
                <img src="https://i.imgur.com/h3FiSQx.png" alt="titulo"></img>
                </Link>
            </div>

            <div className="boton1">
                
            <Link to="/pasteles">
                <img src="https://i.imgur.com/JXYz3Xq.png" alt="boton1"/>
                </Link>
            
                </div>
                <div className="boton2">
               <Link to="/pedidos">
                <img src="https://i.imgur.com/0rnJ3uG.png" alt="boton2"/>
                </Link>
                </div>
           
            
            
        </div>
    )
}
