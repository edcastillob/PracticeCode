import { render } from "@testing-library/react";
import { CounterApp } from "../../../CounterApp";


describe('Test Set Counter App', () => {
  const inicialValue= 10;
test('Debería hacer macth con el Snapshot  ', () => {
  const { container } = render(<CounterApp value={ inicialValue }/>)
});


});

