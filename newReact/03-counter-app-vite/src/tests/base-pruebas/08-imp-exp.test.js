import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from '../../../src/data/heroes'



describe('test getHeroeById 08-imp', () => {
  
    test('getHeroeById debe retornar un Héroe por ID ', () => {

        const id = 6;
        const hero = getHeroeById(id);        
        expect( hero ).toEqual( {id: 6, name: 'Edwar', owner: 'Marvel'} )
      
    });   
    test('getHeroeById debe retornar undefined sino existe el ID ', () => {
        
        const id = 10;
        const hero = getHeroeById(id);        
        expect( hero ).toBeFalsy();      
    });
    
    test('Debe retornar un arreglo con los Héroes de DC ', () => {
        const owner = 'DC';
        const hero = getHeroesByOwner( owner );
         console.log(heroes.filter( (heroe) => heroe.owner === owner ));
        expect( hero ).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);      

        // expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ))
    });
    
    test('Debe retornar la cantidad de heroes owner "DC" ', () => {
        const owner = 'DC';
        const hero = getHeroesByOwner(owner);
        //  console.log(hero.length);
        expect( hero.length ).toBe(3);   
    })

    test('Debe retornar un arreglo con los Héroes de "Marvel" ', () => {
        const owner = 'Marvel';
        const hero = getHeroesByOwner(owner);
         console.log(hero);
        expect( hero ).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' },
            { id: 6, name: 'Edwar', owner: 'Marvel' }
        ]);   
       

    })

    test('Debe retornar la cantidad de heroes owner "DC" ', () => {
        const owner = 'Marvel';
        const hero = getHeroesByOwner(owner);
        //  console.log(hero.length);
        expect( hero.length ).toBe(3);   
    })

   

});
