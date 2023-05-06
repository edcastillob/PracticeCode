import { useState } from "react";
import PropTypes from "prop-types";
import { useDeferredValue } from "react";

export const CounterApp = ({ value }) => {
    const [ counter, setCounter] = useState(value);

    const handleAdd = (e) => {       
        setCounter( counter + 1 )       
    }

    const handleSubtract = () => setCounter( counter - 1 );
    const handleReset = () => setCounter( value );

    
   
    return (
      <>
        <h1>CounterApp</h1>
        <h2>{ counter }</h2>
        <button className="suma" onClick={ handleAdd }>Sumar</button>
        <button className="resta" onClick={ handleSubtract }>Restar</button>
        <button className="reset" onClick={ handleReset }>Reset</button>
      </>
    )
  }

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}
