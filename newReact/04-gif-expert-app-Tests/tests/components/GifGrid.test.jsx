import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");


describe('Test Set Component GifGrid', () => {  

    const category = 'One Punch';

    test(' Inicially Ought show the loading - Inicialmente debería mostrar la carga ', () => {
      
    useFetchGifs.mockReturnValue({
        images:[],
        isLoading: true,
    });

    render( <GifGrid category = { category }/> )
    // screen.debug();
    expect( screen.getByText( 'Cargando...' ) );
    expect( screen.getByText( category ) )

    });
    
    test('Test- Ought Show items when is loaded the imagen useFetchGifs - Debería mostrar elementos cuando se carga la imagen useFetchGifs', () => {

        const gifs = [{
            id: 'wxpdv',
            title: 'Clave de Mejillon',
            url: 'https://mejillon/juanga.jpg',
        },
        {
            id: 'wxpdvsa',
            title: 'Chiqui-Chiqui',
            url: 'https://chiqui/chiqui.jpg',
        }];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });
       
    render( <GifGrid category = { category }/> )
      expect( screen.getAllByRole('img').length ).toBe(2);
    });
    

});