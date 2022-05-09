import React from 'react'
import useLockBodyScroll from '../../Hooks/useLockBodyScroll'
import './_modal.scss'

const Modal = ({ item }) => {
  useLockBodyScroll()

  return (
    <div className='modal__container'>
      <div className='modal__wrapper'>
        <div className='modal__top-wrapper'>
          <img className='modal__img' src={item.img} alt='' />
        </div>
        <div className='modal__bottom-wrapper'>
          <div className='modal__name'>{item.name}</div>
          <div className='modal__ingredients'>
            {item.ingredients}
            {item.size}
          </div>
          <div className='modal__price'>{item.price} €</div>
        </div>
      </div>
    </div>
  )
}

export default Modal
