

const CustomButton = (props) => {
    const { backgroundColor, textColor, buttonText, onClick } = props;
  
    const estiloBoton = {
      backgroundColor: backgroundColor || '#3498db', 
      color: textColor || '#ffffff', 
      padding: '10px 15px',
      borderRadius: '5px',
      cursor: 'pointer'
    };
  
    return (
        <>
            <button style={estiloBoton} onClick={onClick}>
            {buttonText || 'Click me'}
            </button>
            
         </>
    );
  }

export default CustomButton