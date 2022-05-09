import React from 'react'
import './_navbar.scss'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div className='navbar__container'>
      <div className='navbar__wrapper'>
        <div
          className='navbar__logo'
          style={{ fontWeight: 800, color: 'orangered' }}
        >
          LOGO
        </div>
        <Link to='home' smooth={true}>
          <div className='navbar__button'>Home</div>
        </Link>
        <Link to='about' smooth={true}>
          <div className='navbar__button'>About</div>
        </Link>
        <Link to='menu' smooth={true}>
          <div className='navbar__button'>Menu</div>
        </Link>
        <div className='navbar__order-now-wrapper'>
          <div className='navbar__order-now' style={{ color: 'white' }}>
            Order now
          </div>
          <div className='navbar__order-services-wrapper'>
            <div className='navbar__wolt-wrapper'>
              <img src='../logo/wolt.svg' alt='' className='navbar__wolt' />
            </div>
            <div className='navbar__glovo-wrapper'>
              <img src='../logo/glovo.svg' alt='' className='navbar__glovo' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
