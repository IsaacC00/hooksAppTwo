export const ToDoItem = ({ todos, onDeleteToDo, onToggleToDo }) => {
    return (
        <>
            <li className="list-group-item d-flex justify-content-between">
                <span aria-label='span' 
                className={`align-self-center ${todos.done && 'text-decoration-line-through'}`}
                onClick={ () => onToggleToDo(todos.id) } >
                    {todos.description}
                    
                </span>
                <button
                    aria-label='deleteButton'
                    className="btn btn-danger"
                    //?OJO vamos a borrar nuestro ToDo
                    //? apartir del id
                    onClick={ () => onDeleteToDo(todos.id)}
                >
                    Borrar
                </button>
            </li>
        </>
    )
}
