console.log('Hola desde REDUCER');

//? aplicamos la teoria al codigo 
//? estado inicial 
const initialState = [{
    id: 1,
    todo: 'lavar los platos',
    done: false,
}];

//? nuestro reducer que recibe como parametros
//? el estado inical y la accion
//*?y regresa el estado (en este caso)

//? basicamente un reducer es actualizar el state sin mutarlo
//? e identifdcar que tipo de accion va a realizar para actualizar el state

const todoReducer = (state = initialState, accion = {}) => {
    //? en este caso utilizamos un if para identificar el type del accion
    //? pero se utiliza un switch case
    if (accion.type === '[TODO] addTODO') {
        //* OJO no mutamos el state
        return [...initialState, accion.payload]
    }
    return state;
}

//? nueva Tarea
const newToDo = {
    id: 2,
    todo: 'pasear los perros',
    done: false
}

//? la ACTION que permite agregar un nuevo objeto a mi estado(en este caso) 
//? debe seguir un estandar de react de la siguiente manera

const addToDoAction = {
    //? siempre debo definir un type de tipo String XD
    //? para identificar el tipo de accion
    type: '[TODO] addTODO',
    //? y el payload es lo que contiene la accion
    //? no necesariamnete debe tener un payload
    payload: newToDo
}

//? aniador la nueva tarea
let listToDo = todoReducer(initialState, addToDoAction);
console.log(listToDo);


