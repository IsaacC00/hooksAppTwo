import React, { useMemo, useState } from 'react'
import { useCounter } from '../hooks/useCounter'

//cuando ponemos una funcion fuera del componente 
//indicamos que no vamos a almacenar esa funcion en memroia 

const repeticiones = (nVeces = 100) => {
    for (let i = 0; i < nVeces; i++) {
        console.log('Paso Algo');
    }
    return `${nVeces} itereacion realizadas...`
}

export const MemoHook = () => {
    
    const { counter, increment } = useCounter(400);
    const [first, setFirst] = useState(false);

    // muchoi ojo aca solo estamos actualizando el state
    // y se esta disparando la funcion repeticiones() apesar de no
    // estar llamando la funcion dentro del onCliock 
    // Aqui Utilizamos el useMemo
    //sintazis: es un poco parecido al useEffect
    // valor memorizado, depencias que escucha para volver a memorizar el valor
    const valueMemorized = useMemo(() => repeticiones(counter),[counter])

    return (
        <>
            <h2>MemoHook</h2>
            <h1>Counter <small>{counter}</small></h1>
            <hr />
            {/* <h4>{repeticiones(counter)}</h4> */}
            <h4>{valueMemorized}</h4>

            <button
                className='btn btn-primary'
                onClick={() => increment()}
            >
                +1
            </button>

            <button
                className='btn btn-outline-primary'
                onClick={() => setFirst(!first)}
            >
                Actualizar Comp Padre {JSON.stringify(first)}
            </button>

        </>
    )
}
