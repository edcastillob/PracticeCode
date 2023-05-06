import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";



describe('Pruebas en 05-funciones', () => {
  

test('getUser debe retornar un object', () => {
    const testUser={
        uid: 'ABC123',
        username: 'El_Papi1502',
    };
    const user= getUser();
    //console.log(`Soy el testUser ${testUser.username} y yo soy user ${user.username}`)
    expect( testUser ).toEqual( user );
})


test('getUsuarioActivo recibe el nombre y ejecuta test ', () => {
    let nombre="Federico";
    const testUsuarioActivo = {
        uid: 'ABC567',
        username: nombre
    }

    const user = getUsuarioActivo(nombre)
    // console.log(`Hola Soy testUsuarioActivo ${testUsuarioActivo.username} y yo soy user ${user.username}`)
    
  expect( testUsuarioActivo ).toEqual( user );
})






});




