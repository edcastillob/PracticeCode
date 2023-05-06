import { getGifs } from "../../src/helpers/getGifs";

describe('Set Test - Component GetGifs', () => { 

    test('Test- Debería retornar (Ought return) un arreglo de gifs ', async() => {
      
        const gifs = await getGifs( 'One Punch' );
        // console.log(gifs);
        expect( gifs.length ).toBeGreaterThan( 0 ); // que sea por lo menos 1 registro
        expect( gifs[0] ).toEqual({
            id: expect.any( String),
            title: expect.any( String),
            url: expect.any( String),
            // como llega un objeto con esas propiedades evaluamos que tenga esa caracteristica, id, title, url como se definio anteriormente 
        }); 
    });
    

 });