import React, { useState, useEffect } from 'react';
import Header from './Header';
import FormFlights from './FormFlights';
import FlightsResults from './FlightsResults';

const ENDPOINT = {
    busquedas: 'https://www.aeromexico.com/cms/api/v1/airports?language=es&status=1',
    ruta: 'https://www.aeromexico.com/api/v1/checkin/flight-status?store=mx&pos=WEB&flight=&date=2021-04-15&origin=MEX&destination=ACA',
    vuelo: 'https://www.aeromexico.com/api/v1/checkin/flight-status?store=mx&pos=WEB&flight=&date=2020-01-01&origin=MEX&destination=JFK'
}
const App = () => {

    const [airports, setAirports] = useState([])

    useEffect(() => {
        busquedas()
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
    
    const dataByDestiny = () => {
        fetch(ENDPOINT.ruta)
            .then(response => {
                if(response.ok) return response.json()
            })
            .then(data => {
                console.log(data)
            })
            .catch(console.log)
    }

    const dataByNumberOfFligth = () => {
        console.log('perro')
    }
    
    return(
        <div className="App-Container">
            <Header />
            { airports && <FormFlights airports={ airports }/> }
            <FlightsResults />
        </div>
    )
}

export default App;