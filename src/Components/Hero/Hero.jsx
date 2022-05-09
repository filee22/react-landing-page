import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import React from 'react'
import Link from 'react-scroll/modules/components/Link'
import './_hero.scss'

const Hero = () => {
  return (
    <div className='hero__container' id='home'>
      <div className='hero__background'></div>
      <div className='hero__wrapper'>
        <div className='hero__text-wrapper'>
          <div className='hero__main-text'>
            All-natural homemade{' '}
            <span style={{ color: 'orangered', fontWeight: 800 }}>
              gourmet pizzas.
            </span>
          </div>
          <div className='hero__sub-text'>
            Our pizzas are made from preferred natural, organic, local, homemade
            ingredients, prepared in a traditional way, served in a contemporary
            and fun environment.
          </div>
          <Link to='menu' smooth={true}>
            <button className='hero__product-button'>Explore the menu</button>
          </Link>
        </div>
        <div className='hero__product-wrapper'>
          <img className='hero__product' src='./pizza.png' />
          <div className='hero__product-card'>
            <div className='hero__product-info-wrapper'>
              <div className='hero__product-text'>Margherita di Bufala</div>
              <div className='hero__arrows-container'>
                <div className='hero__arrow-wrapper'>
                  <ChevronLeft style={{ color: 'orangered', fontSize: 30 }} />
                </div>
                <div className='hero__arrow-wrapper'>
                  <ChevronRight style={{ color: 'orangered', fontSize: 30 }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src='../images/basil_leaves.png'
          alt=''
          className='hero__product-msc'
        />
      </div>
    </div>
  )
}

export default Hero
