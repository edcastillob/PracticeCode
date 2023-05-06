import { useState } from 'react';


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    // onInputChange = (e) =>{ se puede usar aasi o hacerle destructuring al (e)
    // para a traves del target capturar el valor del input 
    const onInputChange = ( e ) =>{       
        setInputValue(e.target.value)
    }

    // esta es una funcion que guarda el valor del input para agregarlo a la lista
    // mediante el uso de un formulario
    const onSubmit = ( e ) => {
        e.preventDefault();
        // se valida que no agregue un espacio o una categoria de 1 caracter pero no modifica el estado
        if (inputValue.trim().length <= 1) return; 
        
        onNewCategory(inputValue.trim());     
        // con setInputValue(''), limpiamos el input  
        setInputValue('');
        
    }
   

  return (
    <form onSubmit={ onSubmit }>
      <input 
        type='text' 
        placeholder='Ingrese la nueva Categoría'
        value={ inputValue }
        // Onchange se encargara de cambiar el estado del imput a traves de un event (e) 
        onChange={ onInputChange }
      />    
        
    </form>
  )
}


