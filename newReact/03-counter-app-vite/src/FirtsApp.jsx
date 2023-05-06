import PropTypes from "prop-types";

const titulo = () =>  "Aqui se Habla de Tecnología"; 


export const FirtsApp = ({ title, subTitle }) => {
 
   
  return (
    <>
      <h5>{ title }</h5>
      <h2>{ titulo() }</h2>
      <h5>{ subTitle }</h5>
      <p>Textos de Tecnología ha elegido, como temática de sus números 4 y 5,
         la vivienda, esa célula primordial que define el cuerpo de nuestras 
         ciudades, que acelera la espuma de las burbujas inmobiliarias y 
         que teje en el territorio un tapiz de desigualdad y conflictividad 
         social.</p>
    </>
  )
}

FirtsApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
}

FirtsApp.defaultProps = {
  title: 'No existe title',
  subTitle: 'Subtitulo no definido',

}