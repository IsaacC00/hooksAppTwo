import { useState } from 'react';
import { UserContext } from './userContext';

//?este va hacer mi higher componet que va a provee mi contexto
//? lo que diferencia este cmponenete de los demas es que va a renderizr
//? todos los componentes hijos 
export const UserPorvider = ({children}) => {

  //? lo mas correcto es definir funciones que permitan manejar el estdo de 
  //? nuestro contexto 
  const [user, setUser] = useState();

  return (
    //? mucho ojo debemos declarar que este higher component va 
    //? proveer el userContext a los children con un value
    //? esta es la informacion que va a proveer el userContext  
    // <UserContext.Provider value={{msj:'Hola Mundo'}}>//?puede ser lo que quiera {}, func, cont 
      //?puede ser lo que quiera {}, func, cont 
    <UserContext.Provider value= { {user ,setUser} }>
        {children}
    </UserContext.Provider>
  )
}
