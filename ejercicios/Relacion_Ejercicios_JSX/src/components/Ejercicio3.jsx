
/**
 * Ejercicio 3: Uso de eventos
 * Añade un evento onClick a un botón que muestre un mensaje en la consola al ser presionado.
 * Ejercicio 4: Uso de component
 * 
 */
const Ejercicio3 = () => {
  function handleEnviarMensaje(){
    console.log("Has presionado el boton");  
  }

  return (
    <>
    <button onClick={handleEnviarMensaje}>Manda el mensaje a la consola</button>
    </>
  )
}

export default Ejercicio3