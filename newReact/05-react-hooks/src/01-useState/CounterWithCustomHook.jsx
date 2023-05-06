import { useCounter } from "../hooks/useCounter"




export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter();
 
  return (
<>
<div className="text-center">
    <h1>Counter With Hook</h1>
        <h2>{ counter }</h2>
    <hr />

    <button onClick={ increment } className="btn btn-primary" >+1</button>
    <button onClick={ reset } className="btn btn-primary" >Reset</button>
    <button onClick={ () => decrement(2) } className="btn btn-primary" >-1</button>

</div>
</>
  )
}

