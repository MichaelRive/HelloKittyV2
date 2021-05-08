import React from 'react';
import { Link } from 'react-router-dom';
import './css/Estilo.css';

export const Pedidos = () => {
    return (
        <div>
             <div className="titulo">
                <Link to="/">
                    <img src="https://i.imgur.com/h3FiSQx.png" alt="titulo"></img>
                </Link>
            </div>
        </div>
    )
}
