import {getHeroeByIdAsync} from '../../base-pruebas/09-promesas';

describe('Test en 09-Promesas', () => {
 
test('getHeroeByIdAsync debe retornar el Héroe con el ID ingresado', (edwar) => {
  const id =6;
  getHeroeByIdAsync( id )
  .then( heroe => {
    expect( heroe ).toEqual({
        id: 6,
        name: 'Edwar',
        owner: 'Marvel'
    });
     edwar();
  });

});

test('getHeroeByIdAsync debe retornar un error si heroe no existe', (edwar) => {
    const id =100;
    getHeroeByIdAsync( id )
    .catch( error => {
        expect( error ).toBe( `No se pudo encontrar el héroe con el id: ${id}`);
        edwar();
    })
    });
  


})
    



