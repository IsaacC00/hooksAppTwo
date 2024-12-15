import React, { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
    //manejar el estado de los input
    const [formState, setFormState] = useState({
        username: 'Isaac',
        email: 'isaac@google.com'
    });

    //deestructuro mi formState
    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        //vamos a actualizar los valores 
        setFormState({
            //traemos tocos los valores del state
            ...formState,
            //VALORES COMPUTADOS OJO
            //basicamente aqui actualizamos el objeto
            //de nuestro state
            [name]: value
        });
    };

    //React recomiendo tener un useEffect 
    //para una sola depencia, es preferible m,anejar 
    //de esta manera para no sobrecargar los useEffect

    //useEffect cada vez que se actualize una dependecia mi useEffect hara algo 
    // useEffect(
    //     //Accion a ejecutar
    //     () => { console.log('useEffect called!'); },
    //     //Dependecia que espera para ejecutar
    //     //arreglo vacio significa que solo se ejecutara una vez
    //     []
    // );

    //Estrucutra de un useEffect
    useEffect(() => {
        //aqui dentro va el listener
        //de lo que sea que queramos escuchar
        
        //dentro del return
        //limpiamos el listener
        return () => {
            
        }
        //dependencia que ejecuta el useEffect
        //cuando el  componente se monta por 
        //primera vez
    }, [])

    //useeffect para cuando formState cambie
    // useEffect(
    //     ()=>{console.log('formState changed!');},
    //     [formState]
    // );
    //useEffect para cuando el email cambie
    // useEffect(
    //     ()=>{console.log('email changed!');},
    //     [email]
    // );

    //useEffect para cuando el username cambie
    // useEffect(
    //     ()=>{console.log('username changed!');},
    //     [username]
    // );

    return (
        <>
            <h1>Formulario</h1>
            <hr />
            <input
                type="text"
                className='input-form'
                name='username'
                placeholder='username'
                value={username}
                onChange={onInputChange}
            />
            { (username === 'Isaac2') && <Message />}
            <br />
            <input
                type="email"
                className='mt-2 input-form'
                name='email'
                placeholder='email'
                value={email}
                onChange={onInputChange}

            />
        </>
    )
}
