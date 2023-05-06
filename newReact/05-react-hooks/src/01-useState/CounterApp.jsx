import { useState } from 'react';



export const CounterApp = () => {

    let [ state, setCounter ] = useState({
        counter1: 10,
        counter2: 20,                  
        counter3: 30, 
    });

    const { counter1, counter2, counter3 } = state;

    const handleIncrement = (e) => { 
        e.preventDefault();
            const newCounter = { 
            ...state,          
            counter1: counter1 + 1,

         }
       
      

        setCounter( newCounter )
    }

  return (
    <>
         <div className='text-center'>
            <h2>Counter 1: { counter1 }</h2>
            <h2>Counter 2: { counter2 }</h2>
            <h2>Counter 3: { counter3 }</h2>

                 
           
        <hr />

            <button className="btn btn-primary" 
            onClick={ handleIncrement }
            >+1
            </button>
        </div>

        </>

  )
}

