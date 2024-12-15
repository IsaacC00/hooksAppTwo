import { useRef } from "react"

export const FocusScreen = () => {

    //que es un useRef
    //basicamente sirve para manejar 
    //el valor de  una variable y no salta la renderizacion de nuevo

    // sintaxis variable que va almacenar la referencia en este caso de un input
    const inputRef = useRef()
        
    // constexto
    // en caso de que yo quiera selecionar algun elemento de mi documento
    // podria utilizar js vanilla
    const onClickFocus = () => {
        //pero esto lo unico mque me causa es que 
        // me selecione el primer elmento que encuentre en mi documento
        // document.querySelector('input').select(); -> utilozamos useRef
        inputRef.current.select();
    }
    return (
        <>
            <h1>Focus Screen</h1>
            <hr />
            <input
                //utilizamos el useRef en este input para 
                //identificar nuestro input  
                ref={inputRef}
                type="text"
                className="form-control"
                placeholder="Ingrese su nombre"
                name=""
                id=""
            />

            <button 
            onClick={onClickFocus}
            className="btn btn-primary mt-2">
                Set Focus
            </button>
        </>
    )
}
