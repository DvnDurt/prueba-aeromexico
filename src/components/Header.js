import React from 'react';
import logo from '../assets/aeromexico.svg';
import skyteam from '../assets/skyteam.svg';
import mexsvg from '../assets/mexico.svg';
import logomobile from '../assets/logomobile.svg';

const Header2 = () => {

    return (
        <div className="App-Header">
            <div className="App-Header-Left">
                <div className="App-Logo">
                    <div className="App-Header-Logo">
                        <img src={ logo } className="logo-app" alt="logo-aeromexico"/>
                        <img src={ skyteam } className="logo-skyteam" alt="logo-skyteam"/>
                    </div>
                    <div className="App-Header-Mov-Logo">
                        <img src={ logomobile } className="logo-mobile"/>
                    </div>
                </div>
                <ul className="App-Header-Links">
                    <li>Reserva</li>
                    <li>Tu Viaje</li>
                    <li>Check-in</li>
                    <li>Upgrade</li>
                    <li>Club Premier</li>
                </ul>
            </div>
            <div className="App-Header-Right">
                <div className="App-Icon-Question">
                    <i className="far fa-question-circle fa-2x"></i>
                </div>
                <div className="App-Header-Right-Links">
                    <ul className="Right-Links-List">
                        <li>Promociones</li>
                        <li>Rastrea tu vuelo</li>
                        <li>Destinos</li>
                        <li>
                            <span>Mas</span>
                            <span style={{ 'marginLeft': '10px' }}><i className="fas fa-chevron-down"></i></span>
                        </li>
                        <li>
                            <button className="btn-search">
                                <i className="fas fa-search"></i>
                            </button>
                        </li>
                    </ul>
                    <ul className="App-Header-User">
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

export default Header2;