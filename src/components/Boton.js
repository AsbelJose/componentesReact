import React from 'react';
import '../static/css/Boton.css';

export const Boton = ({ text, esBotonDeClic, manejarClic }) => {
  return (
    <button
      className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' }
      onClick={ manejarClic }>
      { text }
    </button>
  )
}
