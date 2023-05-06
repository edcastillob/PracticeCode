


 export const Quote = ({ name, species, gender, image, status }) => {    

   
  return (
        <blockquote className="blockquote text-end">
                <div className="card mt-4"  style={{ width: "18rem" }}>
                <img className="card-img-top" src={ image } alt={ name } />
                <div className="card-body">
                    <p className="card-text text-center">{ status }</p>
                </div>
                </div>
           
                <p className="mb-1">{ name }</p>
                <footer className="blockquote-footer">Especie: { species } Genero: { gender }</footer>
        </blockquote>
  )
}
