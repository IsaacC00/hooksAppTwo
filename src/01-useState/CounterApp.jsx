import { useState } from "react"

export const CounterApp = () => {

    const [counter, setCounter] = useState({
        counterOne: 10,
        counterTwo: 20,
        counterThree: 30
    });

    // otra manera de actualizar el state del useStata es con el operador ...
    //para ello debemos de destructurar nuestro contger
    const { counterOne, counterTwo, counterThree} = counter;

    return (
        <>
            <h1>CounterApp</h1>
            <h2>Counter: {counterOne}</h2>
            <h2>Counter: {counterTwo}</h2>
            <h2>Counter: {counterThree}</h2>
            <hr />
            <button className="btn" onClick={() => setCounter({
                ...counter,
                //para modificar un objeto podemos reasignar el valor mas uno,
                //mucho ojo el set counter modificara TODO lo que contenga el conter
                counterOne: counterOne + 1
                
            })}>+1</button>
        </>
    )
}
