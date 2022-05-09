import React, { useState } from 'react'
import useClickOutside from '../../Hooks/useClickOutside'
import Modal from '../Modal/Modal'
import './_product.scss'

const Product = ({ item }) => {
  const [modal, setModal] = useState(false)

  const handleClick = () => {
    setModal((prev) => !prev)
  }

  const closeModalOutside = useClickOutside(() => {
    setModal(false)
  })

  return (
    <div className='product__container'>
      <div className='product__wrapper' onClick={handleClick}>
        <img className='product__img' src={item.img} alt='' />
        <div className='product__name'>{item.name}</div>
        <div className='product__price'>{item.price} €</div>
      </div>
      {modal ? (
        <div className='product__modal-container'>
          <div className='product__modal-wrapper' ref={closeModalOutside}>
            <Modal item={item} />
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Product
