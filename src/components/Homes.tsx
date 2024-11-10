import React from 'react'
import Navbar from './Navbar'

const Homes = () => {
  return (
    <div id="homes" className='min-h-screen bg-no-repeat bg-[url(/profile5.png)] bg-cover'
    style = {{backgroundSize :"35%", backgroundPosition : "right 120px top 140px"}}
    >
        <Navbar/>
        <div className='container grid lg:grid-cos-2 h-[calc(100vh-60px)]'>
        <div className="hidden lg:block"></div>
            
        <div className='text-[70px] sm:text-[90px] font-semibold leading-tight flex '>
        <div>
            <p data-aos="zoom-in-up">I'm</p>
            <p data-aos="zoom-in-up">Misbah</p>
            <p data-aos="zoom-in-up">Mubashara</p>
        </div>  
        </div>
        </div>
        
    </div>
  )
}

export default Homes
