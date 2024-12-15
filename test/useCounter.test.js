import { renderHook } from "@testing-library/react";
import { useCounter } from "../src/hooks/useCounter";
import { act } from "react";

describe('Pruebas en useCounter', () => {
  test('retornar los valores por defecto', () => {

    //? del resultado actaul (result.current) vamos a desestructurar las funciones 
    //? y evaluar cada una de ellas 
    const { result } = renderHook(() => useCounter());
    const { counter, decrement, increment, reset } = result.current;

    //? vamos a evaluar que el estado inicial sea de 10 
    expect(counter).toBe(10);
    //? y que las funciones sea nsolo funcion (de momento)
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));

  });

  test('el estado inicial del counter sea 100', () => {

    const { result } = renderHook(() => useCounter(100));
    //? otra manera para acceder directamente al estado inicial del resultado
    expect(result.current.counter).toBe(100)
  });

  test('debe de incrememtar el estado', () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment } = result.current;

    //? para ejecutar una funcion de nuestro customHook
    //? debemosenvolverlo en un act 
    act(() => {
      increment()
    });
    //? mucho ojo debeomos de hacer las aserciones 
    //? en el nuevo resultado de nuestro estado 
    //? de la siguiente manera (po que nuestro estado es de un tipo primitivo (string,number,bool))
    expect(result.current.counter).toBe(11);
    //? el proceso es el mismo para el decrement
  });

  test('debe de resetear el estado ', () => {
    const { result } = renderHook(() => useCounter());
    const { counter, reset,decrement } = result.current;

    //? para ejecutar una funcion de nuestro customHook
    //? debemosenvolverlo en un act 
    
    act(() => {
      decrement();
      reset();
    });
    //? mucho ojo debeomos de hacer las aserciones 
    //? en el nuevo resultado de nuestro estado 
    expect(result.current.counter).toBe(10);
  });

});