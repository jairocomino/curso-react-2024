import CustomButton from "./components/CustomButton"


const App2 = () => {
    function handleClick  () {
        console.log('Botón clickeado');
    }

  return (
    <>
        <CustomButton  
        backgroundColor="blue"
        textColor="#ffffff"
        buttonText="Haz clic"
        onClick={handleClick} />
    </>
  )
}

export default App2