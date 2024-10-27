import React from 'react'
import './tarjeta.css'

const Tarjeta = ({nombre , usuario}) => {
  const imagenUsua = `https://unavatar.io/${usuario}`;
  return (
    <div className='Container'>
      <img src={imagenUsua} alt="Imagen" className='Imagen' style={{width:'90px'}}/>
      <div className="Contenido">
      <h3>{nombre}</h3>
      <p>{usuario}</p>
      </div>
      
    </div>
  )
}

export default Tarjeta
