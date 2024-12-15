import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleHook } from '../../src/03-example/MultipleHook';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

jest.mock('../../src/hooks/useFetch');
//? para ver que nuestro hook funcion despues de cargar la informacion 
//? debemos de hacer un mock con jest para que el componente 
//? carge ya con la informacion deseada
jest.mock("../../src/hooks/useCounter");
 
describe('Pruebas en <MultipleHook/> ', () => { 
    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
      counter: 1,
      increment: mockIncrement,
    });
   
    beforeEach(() => {
      jest.clearAllMocks();
    });
   
    test("debe mostrar el componente por defecto ", () => {
      useFetch.mockReturnValue({ data: null, isLoading: true, hasError: null });
      render(<MultipleHook />);
      
      const siguienteButton = screen.getByRole("button", { name: "Siguiente" });
      const anteriorButton = screen.getByRole("button", { name: "Anterior" });
   
      expect(screen.getByText("Cargando..."));
      expect(screen.getByText("Multiple Hook"));
      
    });
   
     test("debe de mostrar el componente un pokemon", () => {
       useFetch.mockReturnValue({
         data: {
           name: "Charmander",
           id: 2,
           sprites: {
             back_default: "back_default",
             back_shiny: "back_shiny",
             front_default: "front_default",
             front_shiny: "front_shiny",
           },
         },
         isLoading: false,
         hasError: null,
       });
       render(<MultipleHook />);
       screen.debug();
       expect(screen.getByText(`#2-Charmander`)).toBeTruthy();
     });
   
     test("Debe de llamar la función de incrementar", () => {
       useFetch.mockReturnValue({
         data: {
           name: "Charmander",
           id: 2,
           sprites: {
             back_default: "back_default",
             back_shiny: "back_shiny",
             front_default: "front_default",
             front_shiny: "front_shiny",
           },
         },
         isLoading: false,
         hasError: null,
       });
       render(<MultipleHook />);
       const siguienteButton = screen.getByRole("button", { name: "Siguiente" });
       fireEvent.click(siguienteButton);
       expect(mockIncrement).toHaveBeenCalled();
     });
});
