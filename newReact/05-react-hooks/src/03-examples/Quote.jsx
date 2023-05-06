import { useLayoutEffect, useRef, useState } from "react"



 export const Quote = ({ name, species, gender, image, status }) => {    

   const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height:0 });

  useLayoutEffect(() => {   
    const { height, width } = pRef.current.getBoundingClientRect();
    setBoxSize( { height, width } );
  }, [name])
   
  return ( 
    <>
          <blockquote className="blockquote text-end" style={{ display: 'flex' }}>
           
                <p ref={ pRef } className="mb-1">{ name }</p>
                <footer className="blockquote-footer">Especie: { species } Genero: { gender }</footer>
        </blockquote>
                <div className="card mt-4"  style={{ width: "18rem" }}>
                    <img className="card-img-top" src={ image } alt={ name } />
                    <div className="card-body">
                    <p className="card-text text-center">{ status }</p>
                </div>
                </div>

                <code>{ JSON.stringify(boxSize) }</code>
        
        </>
  )
}
