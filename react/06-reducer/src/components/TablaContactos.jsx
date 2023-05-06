import React from 'react'
//import Contactos from './Contactos';

const TablaContactos = ({contactos = [], dispatch}) => {
  // handleDelete accion que elimina rl registro el payload se usa para taerme en este 
  // caso el id del registro y el dispatch es que dispara la accion
    const handleDelete = (id) =>{
      const deleteAction = {
        type: "delete",
        payload: id
      }

     dispatch(deleteAction);
        
    };
 
 
    return (
   <table className="table table-hove">
    <thead>
        <tr>
            <th>ID</th>
            <th>Nombres </th>
            <th>Apellidos</th>
            <th>Número</th>
            <th>Acción</th>
        </tr>
    </thead>
    <tbody>
    {  
    // recorro el arr con .map y con el split corto el arr del uuid para mostrar menos caracteres 
       contactos.map((contacto) => {
       const mId = contacto.id.split("-"); 
       ///console.log(mId);

        return (
            
           
            <tr key={contacto.id}>
            <th>{mId[0]}</th>
            <td>{contacto.nombre}</td>
            <td>{contacto.apellido}</td>
            <td>{contacto.numero}</td>
            <td><button onClick={() => handleDelete(contacto.id)} className='btn btn-danger'>Eliminar</button></td>
            
        </tr>
        );
      }) 
    }     
    </tbody>
   </table>
  );
};

export default TablaContactos;
