import { render } from "@testing-library/react";
import { GifItem } from "../../components/GifItem";

describe('Test <GifItem/>', () => { 

    const title = "Saitama";
    const url = 'https://one-punch.com/saitama.jpg';

    test(' Debería hacer macth con el Snapshot ', () => { 

        const { container } = render(<GifItem title = { title } url= { url }/>)
        expect( container ).toMatchSnapshot();
     });

 });

 // de debe enviar title y url ya que es obligatoria esta definida is.requered en el componente