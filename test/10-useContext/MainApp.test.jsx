import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../src/10-useContext/MainApp";

describe('Pruebas en <MainApp/>', () => { 
    test('debe mostrar el HomePage ', () => { 
        render(
            <MemoryRouter>
                <MainApp/>
            </MemoryRouter>
        );
        expect(screen.getByText('HomePage')).toBeTruthy();
     });
  
     test('debe mostrar el LoginPage ', () => { 
        render(
            //?metodo para cambiar de rutas 
            <MemoryRouter initialEntries={['/login']}>
                <MainApp/>
            </MemoryRouter>
        );
        expect(screen.getByText('LoginPage')).toBeTruthy();
     });
 });