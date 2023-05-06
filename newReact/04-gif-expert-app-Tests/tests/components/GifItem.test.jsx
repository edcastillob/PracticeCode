import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";
//import { GifItem } from "../../components/GifItem";

describe('Test <GifItem/>', () => { 

    const title = "Saitama";
    const url = 'https://one-punch.com/saitama.jpg';

    test(' Debería hacer macth con el Snapshot ', () => { 

        const { container } = render(<GifItem title = { title } url= { url }/>)
        expect( container ).toMatchSnapshot();
     });


     test('Test- Debería mostrar la imagen con el url y el Alt indicado', () => { 

        render(<GifItem title = { title } url= { url }/>)
        // screen.debug();
        // expect( screen.getByRole('img').src ).toBe( url );
        // expect( screen.getByRole('img').alt ).toBe( title );
        const { src, alt } = screen.getByRole('img');
        expect ( src ).toBe( url );
        expect ( alt ).toBe( title );

      })

      test('Debería de mostrar el título en el componente', () => {
        render(<GifItem title = { title } url= { url }/>)
        expect( screen.getByText(title)).toBeTruthy();//verifico que existe el texto 
      })
      
 });

 // de debe enviar title y url ya que es obligatoria esta definida is.requered en el componente