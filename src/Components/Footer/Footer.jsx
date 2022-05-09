import { FacebookOutlined, Instagram } from '@mui/icons-material'
import React from 'react'
import './_footer.scss'

const Footer = () => {
  return (
    <div className='footer__container'>
      <div className='footer__wrapper'>
        <div className='footer__logo-rights-social-media-wrapper'>
          <div className='footer__logo'>LOGO LOGO LOGO</div>
          <div className='footer__rights-social-media-wrapper'>
            <div className='footer__copyright-rights-wrapper'>
              <div className='footer__copyright'>LOGO © 2021.</div>
              <div className='footer__rights'>All rights reserved</div>
              <div className='footer__email' style={{ color: 'orangered' }}>
                info@companyname.com
              </div>
            </div>
            <div className='footer__social-media-wrapper'>
              <FacebookOutlined style={{ fontSize: 55 }} />
              <Instagram style={{ fontSize: 55 }} />
            </div>
          </div>
        </div>
        <div className='footer__msc-info-delivery-wrapper'>
          <div className='footer__msc-info-wrapper'>
            <span>FAQ</span>
            <span>Menu</span>
            <span>Impressum</span>
            <span>Terms of use</span>
            <span>Privacy policy</span>
            <span>Cookies</span>
          </div>
          <div className='footer__delivery-services-wrapper'>
            <span className='footer__delivery-available-via'>
              Also available via
            </span>
            <div className='footer__order-services-wrapper'>
              <div className='footer__wolt-wrapper'>
                <img src='../logo/wolt.svg' alt='' className='footer__wolt' />
              </div>
              <div className='footer__glovo-wrapper'>
                <img src='../logo/glovo.svg' alt='' className='footer__glovo' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
