import React from "react";

export const ShowIncrement = React.memo(({ increment }) => {
  console.log('redibujado....');

  return (
    <>
      <button
        className="btn btn-primary"
        onClick={
          // mucho ojo que lo que tenemos aqui es examtamente a esto:
          // const incrementFather = useCallback(
          //   () => {setCounter( (value)=> value+1 )},
          //   [],
          // ); por ello podemos mandar valores pero dentro de este scope 
          () => increment(5)

        }
      >
        Incrementar
      </button>
    </>
  )
})
