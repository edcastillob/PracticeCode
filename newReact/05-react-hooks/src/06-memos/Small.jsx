import React from "react";



export const Small = React.memo(( {value} ) => {
    
    console.log('Volviii');
  return (
    <h3>{ value }</h3>
  )
})
