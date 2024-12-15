import { fireEvent, render, screen } from "@testing-library/react";
import { ToDoItem } from "../../src/09-useReducer/ToDoItem";

describe('Pruebas en <ToDoItem/>', () => {

    //?data fciticioa
    const todo = {
        id: 1,
        description: 'Nuevo ToDo',
        done: false
    }

    //? funciones que sirven para hacer pruebas
    //? que cumplen la misma fucion pero  
    const onDeleteToDoMock = jest.fn();
    const onToggleToDoMock = jest.fn();

    //? para que mis funciones se resetean cada que hago un test debo 

    beforeEach(() => jest.clearAllMocks());


    test('debe de mostrar el ToDo pendiente a completar', () => {
        render(<ToDoItem

            todos={todo}
            onDeleteToDo={onDeleteToDoMock}
            onToggleToDo={onToggleToDoMock}
        />);

        //? pruebas para ver si contiene clases
        const liElement = screen.getByRole('listitem');
        screen.debug();
        expect(liElement.className).toContain('list-group-item d-flex justify-content-between');
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center ');

    });

    test('debe mostrarta el todo completado', () => {

        todo.done = true
        render(
            <ToDoItem

                todos={todo}
                onDeleteToDo={onDeleteToDoMock}
                onToggleToDo={onToggleToDoMock}
            />);

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through');

    });

    test('span debe llamar a ToggleToDo cuando se hace click', () => {
        render(
            <ToDoItem

                todos={todo}
                onDeleteToDo={onDeleteToDoMock}
                onToggleToDo={onToggleToDoMock}
            />);

        const spanElement = screen.getByLabelText('span');

        fireEvent.click(spanElement);
        expect( onToggleToDoMock ).toHaveBeenCalledWith(todo.id);
    });

    test('button debe de llmar el deleteToDo', () => {
        render(
            <ToDoItem

                todos={todo}
                onDeleteToDo={onDeleteToDoMock}
                onToggleToDo={onToggleToDoMock}
            />);

        const buttonDelete = screen.getByLabelText('deleteButton');
        fireEvent.click(buttonDelete);
        expect( onDeleteToDoMock ).toHaveBeenCalledWith(todo.id);
    });
});