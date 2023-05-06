
import { GifItem } from './GifItem';

import { useFetchGifs } from './hooks/useFetchGifs'

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category );
 


    return (
    <>
        <h4>Categoria: {category}</h4>  
        { isLoading && <h2>Loading...</h2>}
        <div className='card-grid' >        
        {
          images.map(( image ) => (
            <GifItem key = { image.id }
            // de esta forma desplegamos todas las propiedades en una sola linea
                           { ...image }
                     

            />
            // forma sin destructuring
            // images.map((images) => (
            //   <li key={ images.id }>{ images.title }</li>
          ))
        }

        
        </div> 
    </>
  )
}


