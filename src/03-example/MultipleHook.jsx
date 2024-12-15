import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"
import { LoadingsMessage } from "./LoadingsMessage";
import { PokemonCard } from "./PokemonCard";

export const MultipleHook = () => {

    const { increment,decrement,reset,counter } = useCounter(1);
    //deestruxturamos para traer la data y mostrar
    const {data,hasError,isLoading} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
    console.log(data);
    
    return (
        <>
            <h1>Multiple Hook</h1>
            {isLoading ? <LoadingsMessage /> : 
            <PokemonCard
             id={data.id}
             name={data.name}
             sprites={[
                data.sprites.front_default,
                data.sprites.front_shiny,
                data.sprites.back_default,
                data.sprites.back_shiny,
             ]} />}

            {/* ? oiperador que nos sirve para verificar si 
            existe data entolnce que me la propieda X */}
            
            {/* <pre>{JSON.stringify(data,null,2)}</pre> */}
            <button
                className='btn btn-primary mt-3'
                //validaxion para no ejecutar el decremento 
                //si el counter es menor a 1
                onClick={() => counter > 1 ? decrement() : null }
                >
                Anterior
            </button>
            <button
                className='btn btn-primary mt-3'
                // onClick asi solo va a mandar un event como arguemnto
                onClick={() => increment()}
                >
                Siguiente
            </button>
        </>
    )
}
