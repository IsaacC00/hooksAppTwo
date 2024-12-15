import {  render, screen } from "@testing-library/react";
import { HomePage } from "../../src/10-useContext/HomePage";
import { UserContext } from "../../src/10-useContext/context/userContext";

describe('pruebas en componente <ToDoApp/>', () => { 
    const user = {
        id:1,
        name:'Isaac'
    }
    test('debe mostrar el componente sin el usuario', () => { 
        render( 
            <UserContext.Provider value={{user:null}}>
                <HomePage />
            </UserContext.Provider>
        );
        const preTag = screen.getByLabelText('preTag')
        expect(preTag.innerHTML).toBe('null');
     });
   
     test('debe mostrar el componente con el usuario', () => { 
        render( 
            <UserContext.Provider value={{ id:1, user:'Isaac'} }>
                <HomePage />
            </UserContext.Provider>
        );
        const preTag = screen.getByLabelText('preTag')
        expect(preTag.innerHTML).toContain(user.name);
        
     });
 })