import React, { useState } from 'react';

import IMGcalc from '../../static/img/calc.png'
import '../../static/css/calculadora/Calculadora.css'
import BotonCalc from './BotonCalc';
import Pantalla from './Pantalla';
import BotonClear from './BotonClear';
import { evaluate } from 'mathjs';

const Calculadora = () => {
  
  //logica de la pantalla
  const [input, setInput] = useState('');

  const agregarInput = (valor) => { 
    setInput(input + valor);
   };

  //función igual
  const calcularResultado = () => {
    //las cadenas de caracteres vacias son falsas y si no estan vacias son verdaderas. ver valores truthy y falsy 
    if (input) {
      //toma la cadena de caracteres del input y la transforma en una expresión matematica. por ultimo, la evalua.
      setInput(evaluate(input));
    } else {
      alert('Por favor ingrese valores para realizar los calculos');
    }
    
    
  }
  
  return (
    <div className='calc-contenedor'>
      <div className='log-contenedor'>
        <img 
          src={ IMGcalc }
          className='logo'
          alt='Logo calculadora'
        />      
      </div>
      <div className='calcBoton-contenedor'>
        <Pantalla input={ input } />
        <div className='fila'>
          <BotonCalc manejarClic={ agregarInput }>1</BotonCalc>
          <BotonCalc manejarClic={ agregarInput }>2</BotonCalc>
          <BotonCalc manejarClic={ agregarInput }>3</BotonCalc>
          <BotonCalc manejarClic={ agregarInput }>+</BotonCalc>
        </div>
        <div className='fila'>
          <BotonCalc manejarClic={ agregarInput }>4</BotonCalc>
          <BotonCalc manejarClic={ agregarInput }>5</BotonCalc>
          <BotonCalc manejarClic={ agregarInput }>6</BotonCalc>
          <BotonCalc manejarClic={ agregarInput }>-</BotonCalc>
        </div>
        <div className='fila'>
          <BotonCalc manejarClic={ agregarInput }>7</BotonCalc>
          <BotonCalc manejarClic={ agregarInput }>8</BotonCalc>
          <BotonCalc manejarClic={ agregarInput }>9</BotonCalc>
          <BotonCalc manejarClic={ agregarInput }>*</BotonCalc>
        </div>
        <div className='fila'>
          <BotonCalc manejarClic={ calcularResultado }>=</BotonCalc>
          <BotonCalc manejarClic={ agregarInput }>0</BotonCalc>
          <BotonCalc manejarClic={ agregarInput }>.</BotonCalc>
          <BotonCalc manejarClic={ agregarInput }>/</BotonCalc>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={ () => setInput('') }>Clear</BotonClear> 
        </div>

      </div>
    </div>
  )
}

export default Calculadora