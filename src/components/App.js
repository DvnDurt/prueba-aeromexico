import React, { useState, useEffect } from 'react';
import Header from './Header';
import FormFlights from './FormFlights';
import FlightsResults from './FlightsResults';
import { ENDPOINT, formatStat } from '../utils/utils';

const App = () => {

    const [airports, setAirports] = useState([])
    const [flights, setFlights] = useState([])

    useEffect(() => {
        busquedas();
    },[]);

    const busquedas = () => {
        fetch(ENDPOINT.busquedas)
            .then(response => {
                if(response.ok) return response.json()
            })
            .then(({airports}) => {
                let data = airports.map(({airport}) => {
                    return {
                        ...airport,
                        label: `${airport.city} ${airport.code}, ${airport.country}`
                    }
                });
                setAirports(data)
            })
            .catch(console.log)
    }
    
    const dataByDestination = (data) => {
        console.log(data)
        const uri = ENDPOINT.ruta.replace('#date', data.date).replace('#origin', data.origin).replace('#destino', data.destination);
        fetch(uri)
            .then(response => {
                if(response.ok) return response.json()
            })
            .then(({ _collection }) => {
                console.log(_collection)
                setFlights(_collection)
            })
            .catch(console.log)
    }
    
    const dataByNumberOfFligth = () => {
        console.log('perro')
    }
    
    return(
        <div className="App-Container">
            <Header />
            { airports && <FormFlights airports={ airports } dataByDestination={ dataByDestination }/> }
            { flights && <FlightsResults flights={ flights }/> }
        </div>
    )
}

export default App;