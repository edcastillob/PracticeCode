import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";


describe('Test Component Add Category', () => {  

test('Ought change the text box value - Debería cambiar el valor del cuadro de texto ', () => {

    

   //   Renderizamos la categoria y definimos el onNewCategory ya que es requerida como propiedad
   render(<AddCategory onNewCategory = {() => {}}/>)
//    creamos una variable que cargara el valor del input
    const input = screen.getByRole('textbox');
    // disparamos el evento y enviamos un valor a la propiedad value del input 
    fireEvent.input ( input, { target: { value: 'Saitama'}});

    expect( input.value ).toBe('Saitama');

   //    screen.debug();

});

test('Ought call OnNewCategory if the input has a value - Debería llamar a OnNewCategory si la entrada tiene un valor', () => {
  
const inputValue = 'Saitama';  // creo el valor del input a evaluar
const onNewCategory = jest.fn(); // pasa la fn() a evaluación con jest solo para prueba
render(<AddCategory onNewCategory = { onNewCategory }/>); //renderizo el componente

const input = screen.getByRole('textbox'); // busco la caja de texto
const form = screen.getByRole('form');     // busco el formulario 

fireEvent.input ( input, { target: { value: inputValue }}); // cambio el valor de la caja de texto y disparo el evento

fireEvent.submit( form ); //dispara el evvento del formulario

expect( input.value ).toBe('');



expect( onNewCategory ).toHaveBeenCalled(); // prueba si la funcion fue invocada
expect( onNewCategory ).toHaveBeenCalledTimes(1); // cantd de veces que queremos invocar la fn
expect( onNewCategory ).toHaveBeenCalledWith( inputValue ); // que haya sido llamada con ese valor inputValue

});

test('Not Ought call onNewCategory if the input is empty - No debe llamar a NewCategory si la entrada está vacía', () => {
  
const onNewCategory = jest.fn(); // pasa la fn() a evaluación con jest solo para prueba
render(<AddCategory onNewCategory = { onNewCategory }/>); //renderizo el componente

const form = screen.getByRole('form');     // busco el formulario 
expect( onNewCategory ).toHaveBeenCalledTimes(0); // verifica que el llamado a la fn sea 0 si el valor es vacio
expect( onNewCategory ).not.toHaveBeenCalled(); // otra forma de hacerlo

})


});