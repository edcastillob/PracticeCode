import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";


describe('Test Set - Hooks useFecthGifs', () => {
  
    test('Ought return the inicially state- Debería devolver el estado inicial.', () => {
      
        const { result } = renderHook( () =>  useFetchGifs('One Punch')); 
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
            

    });

    test('Should return an array of images and isLoading in false- deberia retornar un arreglo de imagenes y isLoading en falso.', async() => {
      
        const { result } = renderHook( () =>  useFetchGifs('One Punch')); 
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
            );
            
        const { images, isLoading } = result.current;
        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();
            

    });
    

});
