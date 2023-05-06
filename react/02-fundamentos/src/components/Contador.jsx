
import { useState } from 'react';

const Contador = ({inicial, factor}) => {
const [contador, setContador] = useState(inicial);

const aumentar = () => {
    setContador((actual) => actual + factor) // aqui actual hace referencia al estado "useState" y toma ese valor
}

const disminuir = () => {
    setContador(contador - factor)
}

const reset = () => {
    setContador(inicial)
}

  return (
    <div>
      <h1>Counter: { contador }</h1>
      <hr />
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={disminuir}>Disminuir</button>
      <button onClick={reset}>Reiniciar</button>


    </div>
  )
}

export default Contador;
