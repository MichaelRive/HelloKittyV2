import React from 'react';
import './css/Estilo.css';
import { Route } from 'react-router';
import { Pastel } from './Pastel';
import { Pedidos } from './Pedidos';
import { Menu } from './Menu';

import { BrowserRouter as Router } from 'react-router-dom'

export const Inicio = () => {
    return (
        <div>
            <Router>

                <Route path="/" export exact="true" component={Menu} />
                <Route path="/pasteles" exact="true" component={Pastel} />
                <Route path="/pedidos" exact="true" component={Pedidos} />


            </Router>
            
            <div className="imagenalta">
                <img src="https://i.imgur.com/ZOiZrD3.png" alt="imagenalta"></img>
            </div>
            <div className="pastel">
                <img src="https://i.imgur.com/Tsl6tpT.png" alt="imagenpastel"></img>
            </div>
            <div className="imagenbaja">
                <img src="https://i.imgur.com/ZOiZrD3.png" alt="imagenbaja"></img>
            </div>
            
        </div>

    )
}
export default Inicio;
