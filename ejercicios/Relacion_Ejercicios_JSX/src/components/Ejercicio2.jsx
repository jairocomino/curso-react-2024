
/**
 * Ejercicio 2: Uso de listas
Renderiza una lista (<ul>) de elementos (<li>) usando map() en un array de nombres.
 */
const nombres= ["Rafa", "Jairo", "Alberto", "Lucia"];
const Ejercicio2 = () => {
  return (
    <>
    <ul>
    {
        nombres.map((nombre, index)=>(
         <li key={index}>{nombre}</li>   
        ))
    }
    </ul>
    
    </>
  )
}

export default Ejercicio2