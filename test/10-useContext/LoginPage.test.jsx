import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/10-useContext/LoginPage";
import { UserContext } from "../../src/10-useContext/context/userContext";

describe('pruebas en LoginPage', () => {
    test('debe mostrar el componenete sin el usuario', () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('preTag')
        expect(preTag.innerHTML).toBe('null');
    });
    test('debe de llamar el setUser cuando se hace click en el boton', () => {
        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value={{ user: null, setUser:setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(setUserMock).toHaveBeenCalledWith({ id:73, name:'isaac', email:'isaac@google.com' });

    });
});