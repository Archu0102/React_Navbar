import './HeroStyle.css'

import React from 'react'
import Heroimg from '../photos/b1.jpg'

const Hero = () => {
  return (
    <div className='hero'>
      <img className='hero-img' src={Heroimg} alt="img"/>
      <h1>Welcome To Our Website</h1>
      <p>For more information please Register here</p>

      <div className='btn'>
      <button>Sigh in</button>
      <button>Sigh up</button>
      </div>
    </div>
  )
}

export default Hero