import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './css/Estilo.css';

export const Pastel = () => {
    let fecha= new Date();
    let hoy = fecha.getDate();
    let [color, setColor] = useState(null);
    let [fecha1, setFecha1] = useState(hoy);
    let [fecha2, setFecha2] = useState(hoy);
    
    return (
        <div>
            <div className="titulo">
                <Link to="/">
                    <img src="https://i.imgur.com/h3FiSQx.png" alt="titulo"></img>
                </Link>
            </div>
            <form>
                <div className="formulario">
                    <div className="mb-3">
                        <label  className="form-label">Cobertura del pastel</label>
                        <input type="color" className="form-control form-control-color" id="colorCobertura" value={color} onChange={e => setColor(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Nombre Cliente</label>
                        <input type="email" className="form-control" id="nombreCliente" />

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Tipo de pastel</label>
                        <select className="form-select" aria-label="Default select example" id="tipoPastel">
                            <option value="Cumpleanos">Cumplea&ntilde;os</option>
                            <option value="Matrimonio">Matrimonio</option>
                            <option value="Divorcio">Divorcio</option>
                            <option value="Pinata">Pi&ntilde;ata</option>
                            <option value="Aniversario">Aniversario</option>
                            <option value="Otros">Otros</option>
                        </select>

                    </div>

                </div>
                <div className="formulario2">
                    <div className="mb-3">
                        <label className="form-label">Fecha Solicitud</label>
                        <input type="date" className="form-control" id="fechaSolicitud" value={fecha1} onChange={e => setFecha1(e.target.value)} disabled/>

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Fecha Entrega</label>
                        <input type="date" className="form-control" id="fechaEntrega" value={fecha2} onChange={e => setFecha2(e.target.value)}/>

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Descripci&oacute;n</label>
                        <input type="email" className="form-control" id="desc" />

                    </div>

                </div>
                <div className="btnForm">
                    <button type="submit" className="btnF">Ordenar</button>
                </div>
            </form>
        </div>
    )
}
