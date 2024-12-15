import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterCustom = () => {
   const {counter,decrement,increment,reset} = useCounter()
  return (
    <>
        <h1>Counter Custom</h1>
        <h1>{counter}</h1>
        <hr />
        <button onClick={ () => increment(2) } className='btn btn-primary'>+1</button>
        <button onClick={ ()=> decrement(2)} className='btn btn-primary'>-1</button>
        <button onClick={reset} className='btn btn-primary'>Reset</button>
    </>
  )
}
