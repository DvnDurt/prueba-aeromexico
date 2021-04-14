import React, { useState } from 'react';
import airportslist  from '../data/airportslist';
import { Typeahead } from 'react-bootstrap-typeahead';

const InputsForSearch = () => {
    
    const [state, setState] = useState({
      disabled: false,
      clearButton: true,
      dropup: false,
      flip: false,
      highlightOnlyResult: false,
      minLength: 1,
      open: undefined,
    });
    
      return (
        <div style={{ 'width': '600px', 'margin': '200px auto' }}>
            <pre>{ JSON.stringify(airportslist) }</pre>
          {/* <Typeahead
            clearButton: true
            minLength: 1
            id="basic-behaviors-example"
            labelKey="label"
            options={datos}
            placeholder="Origen"
            emptyLabel={ 'No se encontraron resultados' }
            onChange={(selected) => {
                console.log(selected)
            }}
          />
          <Typeahead
            {...state}
            id="basic-behaviors-example"
            labelKey="label"
            options={datos}
            placeholder="Origen"
            onChange={(selected) => {
                console.log(selected)
            }}
          /> */}
        </div>
      );
  }

  export default InputsForSearch;