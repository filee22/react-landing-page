import React from 'react'
import './_about.scss'
import Card from '../Card/Card'
import { cards } from '../../data'

const About = () => {
  return (
    <div className='about__content-container'>
      <div className='about__content-wrapper' id='about'>
        <div className='about__title-top'>ORGANIC INGREDIENTS</div>
        <div className='about__title'>
          From farm to table, that's how we roll.
        </div>
        <div className='about__card-container'>
          {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
