import React from 'react';
import '../../static/css/calculadora/BotonCalc.css';

const BotonCalc = (props) => {
  
  const esOperador = (valor) => {
    //si valor no es un numero, no es punto y no es el signo igual es true
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  }

  return (
    <div
      className={ `boton-contenedor ${ esOperador(props.children) ? 'operador' : '' }`.trimEnd() }
      onClick={ () => props.manejarClic(props.children) }>
      { props.children }
    </div>
  )
}

export default BotonCalc