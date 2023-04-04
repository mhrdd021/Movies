import React from 'react'
import Footer from '../components/footer/Footer'

//component
import Hero from '../components/hero/Hero'
import Most from '../components/most/Most'

const Home = ({ Api }) => {
  
  return (
    <div className='flex items-center justify-center flex-col  h-auto z-10'>
      <Hero Api={Api}/>
      <Most Api={Api}/>
    </div>
  )
}

export default Home