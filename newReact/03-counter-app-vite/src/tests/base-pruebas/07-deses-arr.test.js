import { retornaArreglo } from '../../base-pruebas/07-deses-arr';

describe('Retornar un arreglo test-07-arr-destructuring', () => {
test(' Debe retornar un string y un number ', () => {
  
const [ letters, numbers ]  = retornaArreglo();
//  console.log(letters)
 expect( letters ).toBe( 'ABC' );
 expect( numbers ).toBe( 123 );
});

  
});
