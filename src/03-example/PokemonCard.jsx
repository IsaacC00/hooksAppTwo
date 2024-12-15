import React, { useRef, useState } from 'react'

//el useLayoutEffect es parecido al useEfect pero 
//este se ejecuta una vez terminado la ejecucuion de todos los hooks 
//segun la recomendacion se recomienda utilizar useEffect hasta donde sea posible
import { useLayoutEffect } from "react"

export const PokemonCard = ({ id, name, sprites }) => {

  //estado para saber el tamanio de la caja 
  const [boxSize, setBoxSize] = useState({width:0,height:0})
  //hacemos referencia al nombre del pokemon
  const pRef = useRef()

  //utilizamos useLayoutEffect por ejemplo
  //en estilos para ver el tamanio del contenedor
  useLayoutEffect(() => {
    const {width,height} = pRef.current.getBoundingClientRect();
    //actualizamos el state al tamanio de la caja del nombre del pokemon
    setBoxSize({width,height});
    //dependecia que esta atento para actualizar
  }, [name])
  return (
    <>
      <section>
        <h2  ref={pRef} className='text-capitalize'>
          #{id}-{name}
          {/* imagnes */}
        </h2>

        {sprites.map(
          sprites => <img key={sprites} src={sprites} alt={name} />
        )}


      </section>
      <h5>{JSON.stringify(boxSize)}</h5>
    </>
  )
}
