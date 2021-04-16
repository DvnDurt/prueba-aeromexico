import React, { useState, useEffect } from 'react';
import Header from './Header';
import FormFlights from './FormFlights';
import FlightsResults from './FlightsResults';
import { ENDPOINT, } from '../utils/utils';

const App = () => {

    const [airports, setAirports] = useState([])
    const [flights, setFlights] = useState({
        isLoading: false,
        data: []
    })

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
        setFlights({
            ...flights,
            isLoading:true,
        })
        const uri = ENDPOINT.ruta.replace('#date', data.date).replace('#origin', data.origin).replace('#destino', data.destination);
        fetch(uri)
            .then(response => {
                if(response.ok) return response.json()
            })
            .then(({ _collection }) => {
                setFlights({
                    isLoading: false,
                    data: _collection,
                })
            })
            .catch(console.log)
    
    }
    
    const dataByNumberOfFligth = (data) => {

        setFlights({
            ...flights,
            isLoading:true,
        })
        
        const uri = ENDPOINT.vuelo.replace('#date', data.date).replace('#numflight', data.numberOfFlight);

        fetch(uri)
            .then( response => {
                if(response.ok) return response.json();
            })
            .then(({ _collection }) => {
                setFlights({
                    isLoading: false,
                    data: _collection,
                })
            })
            .catch(console.log)
        
    }
    
    return(
        <div className="App-Container">
            <Header />
            { airports &&  
                <FormFlights 
                    airports={ airports } 
                    dataByDestination={  dataByDestination } 
                    dataByNumberOfFligth={ dataByNumberOfFligth } 
                />
            }
            { flights && 
                <FlightsResults 
                    data={ flights } 
                />
            }
        </div>
    )
}

export default App;