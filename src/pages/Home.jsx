import React from 'react'

//component
import Hero from '../components/hero/Hero'

const Home = ({ Api }) => {
  
  return (
    <div className='w-full h-[200vh] absolute top-0 right-0 left-0 z-10'>
        <Hero Api={Api}/>
    </div>
  )
}

export default Home