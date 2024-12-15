import { useContext } from "react"
import { UserContext } from "./context/userContext"

export const LoginPage = () => {
    //? ahora podemos utiliozar nuestro context en donde sea que 
    //? deseemos utilzar de la siguietne manera
    
    const {user,setUser} = useContext(UserContext);

    return (
        <>
            <h1>LoginPage</h1>

            <pre aria-label='preTag' >
                {JSON.stringify(user, null, 3)}
            </pre>

            <button 
              className='btn btn-primary'
              //? mucho OJO aqui ni hacemos referencia sino que debemos de ejecutar 
              onClick={ () =>  setUser({ id:73, name:'isaac', email:'isaac@google.com' }) }>
              
                Agregar Usuario
            </button>

            <hr />
        </>
    )
}

