import { useState } from 'react';
//import { AgregarCategoria } from "./components/AgregarCategoria";
import { AddCategory, GifGrid } from './components';





export const GifExpertApp = () => {
    // creamos el estado para las categorias
    const [ categories, setCategories ] = useState([]);
    
    const onAddCategory = (newCategory) => {
      //validamos si la categoria existe
      if (categories.includes(newCategory)) return alert('this category already exists') ;
       // Para agregar debemos setear categories pasandole una copia de categories + el nuevo valor
      setCategories([newCategory, ...categories]); }

return (
    <>
      <h1>GifExpertApp</h1>
      {/* se le envia a traves del padre la referencia del valor setCategories 
       setCategories es una propiedad de AddCategory y la recibe es una funcion */}
      {/* <AgregarCategoria setCategories={ setCategories }/> */}
      <AddCategory
          onNewCategory = { onAddCategory }
      />    
 
        {/* Se itera el arr categories para retornar una lista con las mismas */}
         {categories.map(( category ) => (
         <GifGrid 
            key = { category } 
            category = { category } 
        />
         ))
         }    
    </>
  )
}


