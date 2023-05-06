import PropTypes from 'prop-types';


export const GifItem = ({ title, url }) => {

   

  return (
    <div className='card>'>
        <img src={ url } alt= { title } />
        <p>{ title }</p>
    </div>
  )
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url  : PropTypes.string.isRequired,
}

// aqui elabore los cambios para las pruebas de componentes...
// npm i prop-types instalo e importo la libreria 
//configuro title y url 