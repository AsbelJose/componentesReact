import React, { useState } from 'react'
import '../static/css/Cards.css'
import pic from '../static/img/pexels-castorly-stock-3768256.jpeg'

export const Cards = ({ persons }) => {
 
  const listitems = persons.map((person) =>
    <div key={ person.id }>
      <p className='title'> <strong> { person.nombre } </strong> de { person.empresa }</p>
      <p className='profs'> <i> { person.position } </i></p>
      <p className='text'>{ person.text }</p>
    </div>
  );

  return (

    <div className='cards-container'>
        <div className='cards-img'>
          <img src={ pic } />
        </div>
        <div className='cards-about'>
  
            { listitems }
              
        </div>
    </div>
  )
}
