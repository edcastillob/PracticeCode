import React, { useState } from 'react';
import { v4 as uuid} from 'uuid';

const FormularioAdd = ({dispatch}) => {
 // uso el estado para capturar los cambios de estados
  const [data, setData] = useState({nombre:"", numero:""});
  // anclar el valor dfe las input
  //destructurando el state esto captura el valor "Value de los inputs"
  const {nombre, apellido, numero} = data;


  // para obtener dinamicamente el valor de los imputs
  const handleChange = (e) => {
    // e.target.name = este evento tiene el valor de los imput
    setData({
      // se hace una copia del los datos  actuales
      ...data,
      // verificamos si hay cambios en las input para setear
      [e.target.name]: e.target.value,
    });
  }
    //constante que captura los valores para el add
    const actionAdd = {
        type:"add",
        payload: {
          id: uuid(),
          nombre,
          apellido,
          numero,
        }
    }
    const handleAdd = () =>{
      dispatch(actionAdd);
    }

 

  return (
  <>
    <div className='container'>
     <label className='mx-1 d-grid gap-2 mt-3'>
      Nombre: {" "}
      <input name='nombre' 
             onChange={handleChange} 
             value={nombre} type="text" 
             className='form-control' 
             autoComplete='off'/>   
     </label>

     <label className='mx-1 d-grid gap-2 mt-3'>
      Apellidos: {" "}
      <input name='apellido' 
             onChange={handleChange} 
             value={apellido} type="text" 
             className='form-control' 
             autoComplete='off'/>   
     </label>

     <label className='mx-1 d-grid gap-2'>
      Número: {" "}
      <input name='numero' 
             onChange={handleChange} 
             value={numero} 
             type="number" 
             className='form-control' 
             autoComplete='off'/>   
     </label>
    <div className='mx-1 d-grid gap-2'>
        <button onClick={handleAdd} className='btn btn-info mt-3' >Agregar</button>
    </div>
    </div>
</>    
  );
};

export default FormularioAdd;

