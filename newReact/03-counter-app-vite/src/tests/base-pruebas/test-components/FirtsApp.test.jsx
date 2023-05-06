import { render } from "@testing-library/react";
import  {FirtsApp } from "../../../FirtsApp";


describe('Test Components FirtsApp', () => {
    
test('Debería realizar match con el Snapshot ', () => {
    const title="ed;"
    const { container } = render( <FirtsApp title={title}/> );
    expect( container ).toMatchSnapshot();
});


});

