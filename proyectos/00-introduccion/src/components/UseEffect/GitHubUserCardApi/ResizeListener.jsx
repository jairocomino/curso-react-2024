import React, { useEffect, useState } from 'react'
const initailState = {
  width: window.innerWidth,
  height: window.innerHeight
}


const ResizeListener = () => {
const [windowSize, setWindowSize] = useState(initailState)

useEffect(() => {
  function handleResize(){
    setWindowSize( {
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  window.addEventListener("resize", handleResize)
   return ()=>{
    window.removeEventListener("resize", handleResize)
   }
}, [])

  return (
    <div className='flex flex-col justify-center items-center bg-cyan-200 h-screen'>
      <p>El tamaño de mi ventana es: {windowSize.width}x{windowSize.height}</p>
    </div>
  )
}

export default ResizeListener