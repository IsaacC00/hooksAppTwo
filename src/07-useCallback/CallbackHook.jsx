import { useCallback, useEffect, useState } from 'react'
import { ShowIncrement } from './showIncrement'

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);
    
    //useCallback nos permite tener almacenada una funcion en memoria 
    //si por algun motivo yp tengo que mandar X proceso a un componente 
    //este se va redibujar y no queremos eso
    //por ello utilizamos el useCallback
    //sintaxis: parecido al useEeffect

    const incrementFather = useCallback(
      //podemos actualziar el valor del state de esta manera tambien
      (value) => {setCounter( (count)=> count+value )},
      //se actualiza cada que se monta la primera vez
      //mucho OJO a lo que se escucha 
      //puede que se redibuje le componente otra vez
      [],
    );

    return (
      <>
        <h1>{counter}</h1>
      {/* OJO en nuestro componente hijo debe memorizar el valor del componente o tambien se puede utilizar un useEFFECT */}
        <ShowIncrement increment={incrementFather} />
    </>
  )
}
