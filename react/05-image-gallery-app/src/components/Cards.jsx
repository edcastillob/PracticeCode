import React, { useState, useEffect,useCallback } from 'react';
import Card from './Card';
import Snnipers from './Snnipers';
import FormImg from './FormImg';


const Cards = () => {
    const [images, setImages] = useState([]);
    const [ input, setInput ] = useState('');
    const [ snnipers, setSnnipers ] = useState(true);

    const peticion = useCallback (async () => {

        const key = "client_id=_3TOrRDEVDqUREp9MdxKogenLzVPD_c--L9u0R4UirQ";
        let route = `https://api.unsplash.com/photos/?${key}`;
        if (input !== ''){
             route = `https://api.unsplash.com/search/photos/?query=${encodeURI(input)}&${key}`;
        }
        setSnnipers(true);
        const res = await fetch(route);              
    
        const data = await res.json();

    if (data.results){
    setImages(data.results); 
    }else{
      setImages(data);   
    }
    setSnnipers(false); 
    },[input]);

  
    

    useEffect(()=>{
        peticion();
    },[ peticion]);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = e.target[0].value;
        setInput(text);
    }

    return (
    <>    <div className='text-center'>
      {/* recibo de handleSubmit el formato */}
        <FormImg handleSubmit={handleSubmit}/> 
        {snnipers && <Snnipers/>}
        </div>
        <div className='row'>
      {
        // LLENO EL ARRAY CON LAS IMAGENES DEL FECH
        images.map((img)=>{ 
            return ( 
            <div key = {img.id} className='col'>
                <Card  img={img.urls.regular} />
            </div>
        ); 
    })
      }

        </div>
    </>
  );
};

export default Cards;
