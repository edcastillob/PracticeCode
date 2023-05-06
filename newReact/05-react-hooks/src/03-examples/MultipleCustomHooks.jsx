import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";



export const MultipleCustomHooks = () => {

    const { counter, increment, decrement, reset } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${ counter }`);
    
    const { name, species, gender, image, status } =!!data && data ;

  return (
    <>
    <h1>Rick and Morty</h1>
    <hr />
 
   {
        isLoading 
        ? <LoadingQuote/>
        : <Quote 
            name={ name } 
            species={ species } 
            gender ={ gender } 
            image = { image }
            status ={ status }


        />
   }
    <button className="btn btn-primary" disabled={ isLoading } onClick={ () => decrement() }  > Prev </button>
    <button onClick={ reset } disabled={ isLoading } className="btn btn-primary" >Reset</button>
    <button onClick={ increment } disabled={ isLoading } className="btn btn-primary" >Next</button>


    </>
  )
}
