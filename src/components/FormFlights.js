import React, { useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import { getDates } from '../utils/utils';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';

const FormFlights = ({airports: airportslist, dataByDestination}) => {
    
    const [ selectDays, setSelectDays ] = useState(getDates());
    const [ state, setState ] = useState({
        isDestiny: true,
        isNumberFlight: false,
        isComplete: false,
        origin: [],
        destino: [],
        date: selectDays[0].format,
    });

    const handleInputs = () => {
        if(!state.origin.length && !state.destino.length) {
            setState((state) => {
                return {
                    ...state,
                    isComplete: false
                }
            });
            
        } else {
            console.log('entra')
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
        const { cityCode:origen } = state.origin[0];
        const { cityCode:destino } = state.destino[0];

        dataByDestination({
            date: state.date,
            origin: origen,
            destination: destino
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
                                            handleInputs()
                                        }}
                                        selected={state.origin}
                                    />
                                </div>
                                <button 
                                    className="btn-change"
                                    onClick={handleButtonChange}
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
                                            handleInputs()
                                        }}
                                        selected={state.destino}
                                    />
                                </div>
                            </div>
                        <div className="Form-Item">
                            <div className={state.isNumberFlight ? '' : 'd-none'}>
                                <label>Numero de Vuelo</label>
                                <div>
                                    <input type="text"/>
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
                                            selectDays.map( day => {
                                                return <option value={ day.format }>{day.stringDate}</option>
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <button 
                            className="btn btn-form-search"
                            onClick={handleButtonSend}
                         >Buscar</button>  
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormFlights;