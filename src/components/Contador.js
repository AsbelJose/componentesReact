import React, { useState } from 'react';
import '../static/css/Contador.css';
import { Boton } from './Boton';
import IMGcontador from '../static/img/los-minutos-icono-del-cron-metro-contador-de-tiempo-digital-reloj-símbolo-la-cuenta-descendiente-vector-y-s-mbolo-147623084.jpeg';
import { CajaContador } from './CajaContador';


export const Contador = () => {
  
  const [numClics, setNumClics] = useState(0);
  
  const manejarClic = () => { 
    setNumClics( numClics + 1 );
   };

  const reiniciarContador = () => { 
    setNumClics( 0 );
   };

  return (
    <div className='contenedor'>
        <div className='logo-contenedor'>
            <img 
                className='logo'
                src={ IMGcontador }
                alt='logo de contador'
            />
        </div>
        <div className='principal-contenedor'>
            <CajaContador numClics={ numClics } />
            <Boton 
                text='Clic' 
                esBotonDeClic={ true }
                manejarClic={ manejarClic }/>
            <Boton 
                text='Reiniciar' 
                esBotonDeClic={ false }
                manejarClic={ reiniciarContador }/>
        </div>
    </div>
  )
}
