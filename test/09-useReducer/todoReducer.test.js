import { todoReducer } from "../../src/09-useReducer/todoReducer";

describe('pruebas en todoReducer', () => {
    const initialState = [{
        id: 1,
        description: 'Demo ToDo',
        done: false,
    }];
    test('debe regresar el estado inicial', () => {

        const newState = todoReducer(initialState, {});
        console.log(newState);
        expect(newState).toBe(initialState);


    });

    test('agregar un nuevo todo', () => {
        const action = {
            type: '[ToDo]Add ToDo',
            payload: {
                id: 2,
                description: 'Nuevo ToDo #2',
                done: false,
            }
        };

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    });

    test('Eliminar un todo', () => {

        const action = {
            type: '[ToDo]Delete ToDo',
            payload: 1,

        };
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);
    });

    test('actualizar un todo', () => {

        const action = {
            type: '[ToDo] toggle ToDo',
            payload: 1
        };

        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBeTruthy();
    });
});