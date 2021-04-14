import React, { useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';

const FormFlights = ({airports: airportslist}) => {
    
    const [ state, setState ] = useState({
        isDestiny: true,
        isNumberFlight: false,
        origin: [],
        destino: [],
    });

    const handleButtonChange = (e) => {
        e.preventDefault();
        console.log('Button')
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
                    <div className={ state.isDestiny ? "FormFlights-Form-Control" : 'd-none' }>
                            <div className="Form-Input">
                                <label className="mb-10">Origen | Ver Todos</label>
                                <Typeahead
                                    clearButton={true}
                                    minLength={1}
                                    id="basic-behaviors-example"
                                    labelKey="label"
                                    options={airportslist}
                                    placeholder="Origen"
                                    emptyLabel={ 'No se encontraron resultados' }
                                    onChange={(selected) => {
                                        setState({
                                            ...state,
                                            origin: selected
                                        })
                                    }}
                                    value={state.origin}
                                />
                            </div>
                            <div style={{ 'marginTop': '30px' }}>
                                <button 
                                    className="btn-change"
                                    onClick={handleButtonChange}
                                ><i className="fas fa-exchange-alt fa-2x"></i></button>
                            </div>
                            <div className="Form-Input">
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
                                        setState({
                                            ...state,
                                            destino: selected
                                        })
                                    }}
                                    value={state.destino}
                                />
                            </div>
                            <div className="Form-Input">
                                <label className="mb-10">Fecha de Salida</label>
                                <select>
                                    <option>Hoy</option>
                                    <option>Mañana</option>
                                    <option>Ayer</option>
                                </select>
                            </div>
                            <button 
                                className="btn btn-form-search"
                                onClick={handleButtonChange}
                            >Buscar</button>     
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormFlights;