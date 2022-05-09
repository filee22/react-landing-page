import React, { useState } from 'react'
import './_menu.scss'
import { products, drinks } from '../../data'
import Product from '../Product/Product'

const Menu = () => {
  const [category, setCategory] = useState('pizza')

  return (
    <div className='menu__container' id='menu'>
      <div className='menu__title-top'>WHAT WE OFFER</div>
      <div className='menu__title'>Discover our menu</div>
      <div className='menu__categories'>
        <button
          className={category == 'pizza' ? 'menu__btn-active' : 'menu__btn'}
          onClick={() => setCategory('pizza')}
        >
          Pizza
        </button>
        <button
          className={category == 'drinks' ? 'menu__btn-active' : 'menu__btn'}
          onClick={() => setCategory('drinks')}
        >
          Drinks
        </button>
      </div>
      <div className='menu__wrapper'>
        {(category == 'pizza' ? products : drinks).map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default Menu
