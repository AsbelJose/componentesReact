import React from 'react';
import '../../static/css/calculadora/Pantalla.css';

const Pantalla = ({ input }) => {
  
  return (
    <div className='input'>
      { input }
    </div>
  )
};

export default Pantalla