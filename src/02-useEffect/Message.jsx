import { useEffect, useState } from "react";

export const Message = () => {

    const [coords, setCoords] = useState({x:0,y:0})
    //probando la estructura de useEffect 
    //especificamente cuando se monta y se desmonta
    useEffect(() => {
        //para este tipo de sintaxis 
        //nos ayuda mucho a manejar la memoria del navegador
        // puesto que si no se desmonta el componente este 
        //seguiria ejecutando la funcion y se llenaria el
        // el espacio en memoria Ejemplo:
        const onMouseMove = ({x,y}) => {
            setCoords({x,y})  
        }
        addEventListener('mousemove',onMouseMove)
      return () => {
        removeEventListener('mousemove',onMouseMove)  
      }
      //se ejecuta unicamente cuando
      //el componente se monta y se desmonta 
    }, []);

  return (
    <>
        <h3>Usuario ya existe</h3>
        {JSON.stringify(coords)}
    </>
  )
}
