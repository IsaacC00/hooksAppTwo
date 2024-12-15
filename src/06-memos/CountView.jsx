import React from 'react'
//digamops que el componente padre se redibuja 
// y que en estew componete se hace una peticion
//o algun proceso pesado ... 
//no es conveniete que cada vez que se redibuja el componente Padre este
//componenete  vuelava hacer N accion 

//por ello utilizamos memo para Memorizar algo 
//y que no se ejecute la peticion N veces
//utilizamos esto solo en caso de ser necesario 
//dependiendo de la depreciacion del componente, caso contrario no se utiliza

//props
export const CountView = React.memo(({ value }) => {
    //de la siguiente maneta 
    console.log('me volvi a dibujar ;(');

    return (
        <small>{value}</small>
    )
});
