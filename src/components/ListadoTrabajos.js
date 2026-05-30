import React from 'react'
import { trabajos } from './data/trabajos'
import { Link } from 'react-router-dom'

export const ListadoTrabajos = ({limite}) => {
  return (
    <div className='page'>

         <section className='works'>
       {
      

      trabajos.slice(limite-2,limite).map(trabajos=>{
        return(
          <article className='work-item'  key={trabajos.id}>
            <div className='mask'>
           
            
          <Link to={"/portafolio/"+trabajos.name}><img  src={require(`./images/${trabajos.id}.PNG`)} ></img></Link>    
            

              
            </div>
             <span>Categoría:{trabajos.categoria}</span>
            <h2 ><Link to={"/portafolio/"+trabajos.name}>{trabajos.name}</Link></h2>
            <h3>{trabajos.tecnologia}</h3>
           

          </article>
        )
      })

    }
    </section>
        

    </div>
  )
}
