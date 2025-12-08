import React from 'react'
import { Outlet } from 'react-router-dom'
import { HeaderNav } from './layout/HeaderNav'
import { Footer } from './layout/Footer'

export const Frontend = () => {
  return (
    <div  className='layout'>

       
        {/*HEAD*/}
    
        <HeaderNav/>
       
        
        {/*BODY*/}
        <section className='content'>
          
          <Outlet/>
        </section>
        

        <footer className='footer'>
          <Footer/>
        </footer>
        {/*FOOTER*/}
        
    

    </div>
  )
}
