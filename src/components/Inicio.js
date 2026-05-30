import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajos, Popular } from './ListadoTrabajos'
import { trabajos } from './data/trabajos'

export const Inicio = () => {



 
  return (
    <div className='inicio'>

      

      

          <h1>

           
         Mi nombre es Alexis Antonio Angel, soy un desarrollador de sistemas de software, me especializo en la creacion de backend seguro y optimizado y en diseño de frontend llamativo para diferentes audiencias, 
         me especializo en proyectos de menor a mayor escala validando la que sea mas adecuada para tus necesidades y presupesto.
          </h1>

          <h2>Tu proyecto que estas deseando puede volverse realidad y cobrar suma relevancia en internet y alcanzar a mas publico
            gracias a las apps moviles, generar mas audiencia por la web o tener automatizado tu negocio gracias a un sistema eficiente que te ahorrara muchos dolores de cabeza y dinero. 
          </h2>


          <div className='content-button'>
            <Link className='button' to="/contacto">contáctame</Link> 
            </div>
          

          <section>
            <h2>Algunos de mis proyectos:</h2>
            <p>Estos son algunos de mis trabajos de desarrollador:</p>
           <ListadoTrabajos limite={trabajos.length}/>
          
           

            <div className='works'></div>
          </section>
      </div>
      
      
  )
}
