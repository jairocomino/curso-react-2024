import React, { useState } from 'react'

const Titulo = (props) =>{
    return (
        <h2>{props.children}</h2>
    )

}


const Card = (props) =>{
    //Este es el componente hijo
    const { title, description, bgColor, count, setCount } = props;
    return (
        <div className={`p-4 rounded-md shadow-md ${bgColor}`}>
            <h2 className='text-xl font-bold'>{ title }</h2>
            <p className='mt-2 '> <Titulo count={count}>Soy el titulo</Titulo> </p>
        </div>
    )
}

const ComponenteProps = () => {
    //Este es el componente padre

    const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col justify-center items-center h-screen bg-slate-400'>
        <h1 className='text-xl font-bold'>El count vale: {count}</h1>
        <Card title="tarjeta1" description="Contenido de la tarjeta 1" bgColor="bg-green-200"count={count} setCount={setCount}/>
       
    </div>
  )
}

export default ComponenteProps