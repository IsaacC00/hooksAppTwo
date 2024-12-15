import { useForm } from "../hooks/useForm";

export const ToDoAdd = ({onNewTodo}) => {

    //utilizamos nuestro customHook para manejar formularios
    const {description,onInputChange,onResetForm} = useForm({
        description:''
    });

    const onFormSubmit = (event) => {
        event.preventDefault();
        if(description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime()*8,
            done:false,
            description:description
        }

        //? funcion que viene de los props
        onNewTodo(newTodo);
        onResetForm();
    }

    return (
        <>
            <form onSubmit={event => onFormSubmit(event)}>
                <input
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Esperando Nueva Tarea..."
                    value={description}
                    onChange={onInputChange}
                />
                <button
                    type="submit"
                    className="mt-3 btn btn-outline-primary"
                >
                    Submit
                </button>
            </form>
        </>
    )
}
