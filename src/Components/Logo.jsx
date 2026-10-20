import React from 'react'
import { HousePlus, Heart, UserRound } from 'lucide-react';
import './Logo.css'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <>
      <div className="container">
        <div className="logo">
          <HousePlus size={30} strokeWidth={1.3} color='orange' className='housepluse' />
          <div>
            <h3 className='logoh3'>LUXORA</h3>
          </div>
        </div>
        <div className="pages">
          <Link to={'/'} className='lin' > <p className='logop1'>Home</p> </Link>
          <Link to={'/about'} className='lin' > <p className='logop2'>About</p> </Link>
          <Link to={'/contact'} className='lin' > <p className='logop3'>Contact</p> </Link>
        </div>

        <div className="icons">
          <Link to={'/addtocart'} >  <Heart color='red' fill='red' className='Heart' /> </Link>
          <UserRound color='white' />
          <button className='logobtn'>Get Started</button>
        </div>


      </div>

    </>
  )
}

export default Logo
