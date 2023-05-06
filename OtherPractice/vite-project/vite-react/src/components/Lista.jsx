import { useState } from 'react'
import ListItem from './ListItem';

const Lista = () => {
    const [articulos, setArticulos] = useState('');
    const [lista, setLista] = useState([]);

    // capturamos el valor del input a traves del onChange={handleChangeInput}
    const handleChangeInput = (e) =>{
        setArticulos(e.target.value)};

    // Con el boton buscamos agregar los items a la lista a traves de onClick={handleClickAdd}
       const handleClickAdd = () => {
       const currentList = lista;
       currentList.push(articulos);
       setLista(currentList);
       setArticulos('');
    };
  return (
    <>
    <div className='container' >

      <label> {" "}
        Lista de articulos:
      </label><br />

      <button className='btn btn-info mx-3' onClick={handleClickAdd}>Agregar Item</button>
      <input className='form-control mx-3 mt-3 mb-3' placeholder="Ingrese" value={articulos} onChange={handleChangeInput}/>

      <table className='table table-striped'>
        {lista.map((item, index) => <ListItem key={`list-item-${item}-${index}`} name={item}/>)}
      
      </table>
      </div>
    </>
  )
}

export default Lista;
