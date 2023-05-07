


export const ShowIncrement = ({ increment }) => {
  return (
    <button  
    onClick={ () => { 
        increment();
     }} 
     className="btn btn-primary"> + 1 </button>   
    
  )
}
