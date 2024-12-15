import React, { useState } from 'react'
import { useCounter } from '../hooks/useCounter'
import { CountView } from './CountView';

export const Memorize = () => {

        const [first, setFirst] = useState(false);
        const {counter,increment} =  useCounter(10);
        
    return (
        <>
            <h1>Counter <CountView value={counter}/> </h1>
            <hr />
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
