import React from 'react'
import './_card.scss'

const Card = ({ item }) => {
  return (
    <div className='card__wrapper' style={{ backgroundColor: item.color }}>
      <div className='card__img-wrapper'>
        <img className='card__img' src={item.img} alt='' />
      </div>
      <span className='card__title'>{item.title}</span>
      <p className='card__text'>{item.text}</p>
    </div>
  )
}

export default Card
