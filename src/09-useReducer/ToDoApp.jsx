import { ToDoList } from "./ToDoList";
import { ToDoAdd } from "./ToDoAdd";
import { useToDo } from "../hooks/useToDo";

export const ToDoApp = () => {
   
    const {todos,todosCount,pendingTodosCount,handleDeleteToDo,handleToggleToDo,handleNewToDo} = useToDo();

    return (
        <>
            <h1>ToDoApp: {todosCount} <small>pendientes: {pendingTodosCount}</small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    {/* TODOLIST */}
                    <ToDoList todos={todos} onDeleteToDo={handleDeleteToDo} onToggleToDo={handleToggleToDo} />
                    {/* TODOLIST */}
                </div>

                <div className="col-5">
                    <h4>Agregar Tarea</h4>
                    <hr />
                    {/* Formulario */}
                    <ToDoAdd onNewTodo={handleNewToDo} />
                    {/* Formulario */}
                </div>

            </div>
        </>
    )
}
