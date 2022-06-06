import React from 'react';
import '../../static/css/calculadora/BotonClear.css';

const BotonClear = ({ children, manejarClear }) => {
  return (
    <div 
      className='boton-clear'
      onClick={ manejarClear }>
      { children }
    </div>
  )
}

export default BotonClear