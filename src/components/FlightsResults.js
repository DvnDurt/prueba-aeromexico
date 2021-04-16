import React from 'react';
import { formatStat } from '../utils/utils';

const FlightsResults = ({ data:{ data:flights, isLoading } }) => {
    
    return(
        <div>
            {
                isLoading ? <div className="No-Flights"><div className="LoadingResults"></div></div>
                :
                flights.length ?
                    <div className="FlightsResults">
                        <div>
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
                                    flights.map( ({ _collection:collections }, i) => {
                                        return (
                                            <li key={ i }>
                                                {
                                                    collections.map( (collection, i) => {

                                                        const numVuelo = collection.segment.marketingCarrier + ' ' +collection.segment.marketingFlightCode;
                                                        const [ formatStatus ]  = formatStat(collection.status);
                                                        const origin = collection.segment.departureAirport;
                                                        const departureDateTime = collection.segment.departureDateTime.split('T')[1];
                                                        const arrivalDateTime = collection.segment.arrivalDateTime.split('T')[1];
                                                        const arrivalAirport = collection.segment.arrivalAirport;
                                                        const boardingTerminal = collection.boardingTerminal ? collection.boardingTerminal : 'N/A' ;
                                                        const arrivalTerminal = collection.arrivalTerminal ? collection.arrivalTerminal : 'N/A' ;
                                                        const arrivalGate = collection.arrivalGate;
                                                        const boardingGate = collection.boardingGate;

                                                        return(
                                                            <div style={{ 'margin': '20px' }} key={ i++ }>
                                                                <div className="Flight-Results-S">
                                                                    <div className="Flight-Results-S-Content mb-20">
                                                                        <div className="">
                                                                            {numVuelo}
                                                                        </div>
                                                                        <div>
                                                                            <span className={ formatStatus.statusStyle }>{ formatStatus.statusEs ? formatStatus.statusEs : '' }</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="Flight-Results-S-Content">
                                                                        <div>
                                                                            { departureDateTime }
                                                                        </div>
                                                                        <div className="arrow-div"></div>
                                                                        <div>
                                                                            { arrivalDateTime }
                                                                        </div>
                                                                    </div>
                                                                    <div className="Flight-Results-S-Content">
                                                                        <div>
                                                                            { origin }
                                                                        </div>
                                                                        <div>
                                                                            { arrivalAirport }
                                                                        </div>
                                                                    </div>
                                                                    <div className="Flight-Results-S-Content">
                                                                        <div>
                                                                            <p>Terminal { boardingTerminal }</p>
                                                                            <p>Sala { arrivalGate }</p>
                                                                        </div>
                                                                        <div>
                                                                            <p>Terminal {arrivalTerminal}</p>
                                                                            <p>Sala { boardingGate }</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="Flight-Results-L">
                                                                    <div className="">
                                                                        {numVuelo}
                                                                    </div>
                                                                    <div>
                                                                        <span className={ formatStatus.statusStyle }>{ formatStatus.statusEs ? formatStatus.statusEs : '' }</span>
                                                                    </div>
                                                                    <div className="Flight-Results-S-Content mb-20">
                                                                        <div>
                                                                            { origin }
                                                                        </div>
                                                                        <div>
                                                                            <p>Terminal { boardingTerminal }</p>
                                                                            <p>Sala { boardingGate }</p>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        { departureDateTime }
                                                                    </div>
                                                                    <div className="arrow-div"></div>
                                                                    <div>
                                                                        { arrivalDateTime }
                                                                    </div>
                                                                    <div className="Flight-Results-S-Content mb-20">
                                                                        <div>{ arrivalAirport }</div>
                                                                        <div>
                                                                            <p>Terminal { arrivalTerminal }</p>
                                                                            <p>Sala { arrivalGate }</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </li>

                                    )})
                                }
                            </ul>
                        </div>
                    </div>
                : <div className="No-Flights"></div>
            }
        </div>      
    )
}

export default FlightsResults;