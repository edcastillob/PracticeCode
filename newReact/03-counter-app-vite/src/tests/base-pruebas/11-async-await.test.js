import { getImagen } from '../../base-pruebas/11-async-await';


describe('Test Async-Await--> Pruebas con conexión a Api Giphy', () => {  

    test('getImagen => Debe retornar imagen aleatoria de Api Giphy ', async() => {
      
        const url = await getImagen();
        console.log(url)
        expect( typeof url ).toBe('string');
    })
    
});