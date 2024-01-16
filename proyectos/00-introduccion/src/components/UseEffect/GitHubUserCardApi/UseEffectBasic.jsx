import React, { useEffect, useState } from 'react'

const UseEffectBasic = () => {
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);

    function handleClick(){
        setCounter(counter+1)
        
    }
    function handleClick2(){
        
        setCounter2(counter2+1)
    }
    //los efectos van aqui
    //variantes UseEffect
    //useEffect(() => {
     //primera variante sin dependencias
     //se ejecuta cuando se pinta el componente y cuando se modifica cualquier estado
     //ESTA VARIANRE ES MUUUUUUUUUUUUUUUUUUUUYYYYYYYYYYYYYYYYY PELIGROSA
    //    console.log("Estoy dentro del efecto UseEffect");
    //})
    //useEffect(() => {
    // //segunda variante
    // //solo se ejecuta una vez
    // //porque el array de dependencias esta vacio
    // console.log("Estoy dentro de useEffect v2");
    //}, [])
   // useEffect(() => {
   //     //tercera variante
   //     // se ejecuta cuando se pinta el componente y cuando se cambia la variable del array de dependencis
   //     //en el array de dependencias coloco aquel estado que quiero que cuando se modifique dispare el useEffect
//
   //     console.log("V3");
   // }, [counter2])
    //useEffect(() => {
    //  first
    //
    //  return () => {
    //    second
    //  }
    //}, [third])
    
    

  return (
    <div className='flex justify-center items-center bg-cyan-200 h-screen'>
        <h1 className='text-x1 font-bold'>Contador: {counter}</h1>
        <button className='mt-4 p-2 bg-slate-800 text-white rounded-md'
        onClick={handleClick}
        >Aumentar contador 1</button>

        <h1 className='text-x1 font-bold'>Contador: {counter2}</h1>
        <button className='mt-4 p-2 bg-slate-800 text-white rounded-md'
            onClick={handleClick2}
        >Aumentar contador 2</button>
    

    </div>
  )
}

export default UseEffectBasic