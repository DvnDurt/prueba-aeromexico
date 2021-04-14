import React from 'react';
import logo from '../assets/aeromexico.svg';
import skyteam from '../assets/skyteam.svg';
import mexsvg from '../assets/mexico.svg';

const Header = () => {

    return (
        <div className="App-Header">
            <div className="App-Header-Left">
                <div className="App-Header-Logo">
                    <img src={ logo } className="logo-app" alt="logo-aeromexico"/>
                    <img src={ skyteam } className="logo-skyteam" alt="logo-skyteam"/>
                </div>
                <div className="App-Header-Links">
                    <ul>
                        <li>Reserva</li>
                        <li>Tu Viaje</li>
                        <li>Check-in</li>
                        <li>Upgrade</li>
                        <li>Club Premier</li>
                    </ul>
                </div>
            </div>
            <div className="App-Header-Rigth">
                <div className="App-Header-Rigth-Links">
                    <ul className="Rigth-Links-List">
                        <li>Promociones</li>
                        <li>Rastrea tu vuelo</li>
                        <li>Destinos</li>
                        <li>
                            <div>
                                <span>Mas</span>
                                <span style={{ 'marginLeft': '10px' }}><i className="fas fa-chevron-down"></i></span>
                            </div>
                        </li>
                        <li>
                            <button className="btn-search">
                                <i className="fas fa-search"></i>
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="App-Header-User">
                    <ul>
                        <li>
                            <i className="far fa-envelope fa-2x"></i>
                        </li>
                        <li>
                            <img src={ mexsvg } className="logo-mexsvg" alt="logo-mexico"/>
                        </li>    
                        <li>Iniciar Sesión</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;