import React from 'react';
import '../static/css/CajaContador.css';

export const CajaContador = ({ numClics }) => {
  return (
    <div className='cajaContador'>
      { numClics }
    </div>
  )
}
