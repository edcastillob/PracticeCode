import React, { useEffect, useReducer, useState } from 'react'
import FormularioAdd from './FormularioAdd';
import TablaContactos from './TablaContactos';
import { ContactosReducer } from '../reducers/ContactosReducer';


// init viene por default de reducer y me guarda ese valor inicial 
// en contactos tendre el valor de cont key value en el return pregunta si contactos existe en 
// local storage entonces convierte el string contactos a formato json para interpretarlo sino envia null
// a traves del arr vacio 
const init = () => {
  const contactos = localStorage.getItem("contactos");
  
  return contactos ? JSON.parse(contactos) : [];
};

const Contactos = () => {
  const [state, dispatch] = useReducer(ContactosReducer, [], init);

//  con el useEffectcapturo el valor del estado para guardarlo en el localStorage con el JSON.stringify(state))
//  lo paso a string ya que el key value requerido por localstorage es un string
  useEffect(() => {
      localStorage.setItem("contactos", JSON.stringify(state))
  },[state])


  const [formView, setFormView] = useState(false);


  return (
  <div className='container mt-3'>  
    <button onClick={() => setFormView(!formView)} 
    className='btn btn-success'
    >
      {formView ? "Cerrar" : "Agregar Contacto"}
    </button>
    {formView && <FormularioAdd dispatch={ dispatch }/> }
      
      <TablaContactos  contactos={state} dispatch={ dispatch }/>
     
    </div>
  )
}

export default Contactos;
