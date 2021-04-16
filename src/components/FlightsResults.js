import React from 'react';

const FlightsResults = ({ flights }) => {
    
    return(
        <div className="FlightsResults">
            <ul className="Results-Header">
                <li>Número de Vuelo</li>
                <li>Estado</li>
                <li>Origen</li>
                <li>Hora de Salida</li>
                <li>Hora de Llegada</li>
                <li>Destino</li>
            </ul>
            <ul className="Results-Content">
                    {
                        flights.map( ({ _collection }) => {
                            const numVuelo = _collection[0].segment.marketingCarrier + ' ' +_collection[0].segment.marketingFlightCode;
                            const { status } = _collection[0];
                            const origin = _collection[0].segment.departureAirport;
                            const departureDateTime = _collection[0].segment.departureDateTime.split('T')[1];
                            const arrivalDateTime = _collection[0].segment.arrivalDateTime.split('T')[1];
                            const arrivalAirport = _collection[0].segment.arrivalAirport;
                            return(
                                <li>
                                    <div style={{ 'display': 'flex', 'justifyContent': 'space-around' }}>
                                        <div>
                                            {numVuelo}
                                        </div>
                                        <div>
                                            { status }
                                        </div>
                                        <div>
                                            { origin }
                                        </div>
                                        <div>
                                            { departureDateTime }
                                        </div>
                                        <div>
                                            { arrivalDateTime }
                                        </div>
                                        <div>
                                            { arrivalAirport }
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
            </ul>
        </div>      
    )
}

export default FlightsResults;