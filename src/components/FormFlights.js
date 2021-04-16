import React, { useState, useEffect } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import { getDates, regEx } from '../utils/utils';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';

const FormFlights = ({airports: airportslist, dataByDestination, dataByNumberOfFligth}) => {
    
    const [ selectDays ] = useState(getDates());
    const [ state, setState ] = useState({
        isDestiny: true,
        isNumberFlight: false,
        isComplete: false,
        origin: [],
        destino: [],
        numberOfFlight: '',
        date: selectDays[0].format,
    });

    useEffect(() => {
        handleInputs();
    }, [state.origin, state.destino])

    const handleInputs = () => {
        if(!state.origin.length || !state.destino.length) {
            setState((state) => {
                return {
                    ...state,
                    isComplete: false
                }
            });
            
        } else {
            
            setState((state) => {
                return {
                    ...state,
                    isComplete: true
                }
            });
        }
        
    }

    const handleButtonChange = (e) => {
        e.preventDefault();
        
        setState({
            ...state,
            origin: state.destino,
            destino: state.origin
        })
    }

    const handleButtonSend = (e) => {
        e.preventDefault();

        if(state.isDestiny) {

            const { cityCode:origen } = state.origin[0];
            const { cityCode:destino } = state.destino[0];

            dataByDestination({
                date: state.date,
                origin: origen,
                destination: destino
            })

        } else if(state.isNumberFlight) {
        
            dataByNumberOfFligth({
                date: state.date,
                numberOfFlight: state.numberOfFlight
            })

        }
        
    }

    const handleInputNumberFlight = (e) => {
        let value = regEx(e.target.value);
        console.log(value)
        if(!value) {
            setState({
                ...state,
                isComplete: false
            })

            return;
        }

        setState({
            ...state,
            numberOfFlight: value,
            isComplete: true
        })
    }

    const handleSelect = (e) => {
        setState({
            ...state,
            date: e.target.value
        })
    }

    return(
        <div className="Flights">
            <div className="FormFlights-Container">
                <form className="FormFlights-Form">
                    <div className="FormFlights-Form-Radio">
                        <div className="Control-Radio">
                            <input 
                                type="radio"
                                checked={ state.isDestiny }
                                onChange={ () => setState({ ...state, isDestiny: true, isNumberFlight: false}) }
                            />
                            <label>Destino</label>
                        </div>
                        <div className="Control-Radio ">
                            <input 
                                type="radio"
                                checked={ state.isNumberFlight }
                                onChange={ () => setState({ ...state, isNumberFlight: true, isDestiny: false}) }
                            />
                            <label>Número de Vuelo</label>
                        </div>
                    </div>
                    <div className="FormFlights-Form-Control">
                        <div className={ state.isDestiny ?  'Form-Destiny ' : 'd-none'}>
                                <div>
                                    <label className="mb-10">Origen | Ver Todos</label>
                                    <Typeahead
                                        clearButton={true}
                                        minLength={1}
                                        id="basic-behaviors-example"
                                        labelKey="label"
                                        name='origin'
                                        options={airportslist}
                                        placeholder="Origen"
                                        emptyLabel={ 'No se encontraron resultados' }
                                        className='Form-Input'
                                        onChange={(selected) => {
                                            setState((state) => {
                                                return {
                                                    ...state,
                                                    origin: selected
                                                }
                                            })
                                        }}
                                        selected={state.origin}
                                    />
                                </div>
                                <button 
                                    className="btn-change"
                                    onClick={handleButtonChange}
                                    style={!state.isComplete ? { 'opacity': '.3' } : {}}
                                    disabled={ !state.isComplete ? true : false}
                                 ><i className="fas fa-exchange-alt fa-2x"></i></button>
                                <div>
                                    <label className="mb-10">Destino | Ver Todos</label>
                                    <Typeahead
                                        clearButton={true}
                                        minLength={1}
                                        id="basic-behaviors-example"
                                        labelKey="label"
                                        options={airportslist}
                                        placeholder="Destino"
                                        emptyLabel={ 'No se encontraron resultados' }
                                        onChange={(selected) => {
                                            setState((state) => {
                                                return {
                                                    ...state,
                                                    destino: selected
                                                }
                                            })
                                        }}
                                        selected={state.destino}
                                    />
                                </div>
                            </div>
                        <div className="Form-Item">
                            <div className={state.isNumberFlight ? '' : 'd-none'}>
                                <label>Numero de Vuelo</label>
                                <div>
                                    <input 
                                        type="text"
                                        onChange={handleInputNumberFlight}
                                        value={state.numberOfFlight}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="mb-10">Fecha de Salida</label>
                                <div>
                                    <select
                                        className="Form-Input"
                                        onChange={handleSelect}
                                    >
                                        {
                                            selectDays.map( (day, i) => {
                                                return <option value={ day.format } key={ i }>{day.stringDate}</option>
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <button 
                            className="btn btn-form-search"
                            onClick={handleButtonSend}
                            disabled={ !state.isComplete ? true : false }
                         >Buscar</button>  
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormFlights;