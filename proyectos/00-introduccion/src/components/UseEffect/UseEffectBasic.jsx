import React, { useEffect, useState } from 'react'

const UseEffectBasic = () => {
const [Counter, setCounter] = useState(0)

// function handleclik(){
// setCounter(Counter+1);
// } 

  //useEffect(()=>{
    //primera
    //re comendable no usar 
    //se ejecuta cuando se pinta el componente 
    //y cuando se modifica cualquier estado
    //esta variante es muyuyyyyyyyyyyyy PELIGROSA
    //console.log("eSTOY EN USSSEEFECT ");
  //})


function handleclik2(){
  setCounter(Counter+1);
  setCounter(Counter+2);
  setCounter(Counter+3);
  } 
  function handleclik1(){
    setCounter(Counter+1);
  
    } 
//USEEFECT VERSION 3
useEffect(()=>{
//se ejecuta cuando  sae pinta el componente 
   console.log("eSTOY EN USSSEEFECT v3 ");
},[counter])

// useEffect(() => {
//   first

//   return () => {
//     second
//   }
// }, [third])



  return (
  <>
    <div>UseEffectBasuc
      <h1  className='text-x1 font-bold '>contador :{Counter}</h1>
      <button className='mt-4 bg-slate-800 text-white rounded-md' onClick={handleclik2()}>Aumentar</button>
      <button className='mt-4 bg-slate-800 text-white rounded-md' onClick={handleclik1()}>Aumentar</button>
    </div>
    </>
  )
}

export default UseEffectBasic