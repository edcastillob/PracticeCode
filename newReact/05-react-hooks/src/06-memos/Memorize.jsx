import { useState } from "react";
import { useCounter } from "../hooks"
import { Small } from "./Small";




export const Memorize = () => {

    const { counter, increment } = useCounter(10);
    const [show, setShow] = useState(true);

  return (
    <>
    <div className="text-center">
    <h1>Counter</h1>
    <Small value = { counter }/>
    <hr />

     <button  onClick={ increment } className="btn btn-primary"> + 1 </button>   
     <button  onClick={ () => setShow( !show ) } className="btn btn-outline-primary">
      Show/Hiden { JSON.stringify( show ) }</button>   

     </div>
     </>
  )
}
