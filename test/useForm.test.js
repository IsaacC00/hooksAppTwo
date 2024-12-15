import { renderHook } from "@testing-library/react";
import { useForm } from "../src/hooks/useForm";
import { act } from "react";

describe('pruebas en useForm', () => {

    const initialForm = {
        name: 'Isaac',
        email: 'isaac@correo.com'
    }

    test('debe devolver los valores iniciales', () => {

        const { result } = renderHook(() => useForm(initialForm));
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)       
        });
    });

    test('debe cambiar el nombre del formulario', () => { 
        
        const newValue = 'Mateo' ;
        const {result} = renderHook( () => useForm(initialForm) );
        const {onInputChange} = result.current;

        act( () => {
            //? debemos de mandar el event target
            onInputChange({target: {name:'name', value:newValue }});
        });

        expect(result.current.name).toEqual(newValue);
        expect(result.current.formState.name).toEqual(newValue);

     });

    test('debe de realizar el reset del formulario', () => { 
        
        const newValue = 'Mateo' ;
        const {result} = renderHook( () => useForm(initialForm) );
        const {onInputChange,onResetForm} = result.current;

        act( () => {
            //? debemos de mandar el event target
            onInputChange({target: {name:'name', value:newValue }});
            onResetForm();
        });
        expect(result.current.formState).toEqual(initialForm);

     });
}); 

