
/**
 * Ejercicio 1: Renderizado condicional
 * Renderiza un elemento <p> con el texto "Bienvenido" si una variable isLoggedIn es true, de lo
 * contrario muestra "Por favor, inicia sesión".
 */
import React from 'react'
import { useState } from 'react'

const Ejercicio1 = () => {
  const [isLoggedIn, setisLoggedIn] = useState(ture)
  function handleClick() {
    setisLoggedIn(!isLoggedIn)
  }
  return (
    <>
    <p>{isLoggedIn ? "Bienvenido": " iniciar sesion"}</p>
    <button onClick={handleClick}>{isLoggedIn ? "Logout": "Login"}</button>
    </>
  )
}

export default Ejercicio1