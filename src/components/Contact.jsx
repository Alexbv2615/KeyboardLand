import React from 'react'

function Contact() {
  return (
    <div className='Contact' id='contacto'>
      <h1 data-aos="zoom-in-up">Ponte en contacto con nosotros</h1>
      <section className='Contact-btns'>
        <div data-aos="zoom-in-up" className='Contact-btns-face'>
            <img src="/face.png" alt="Facebook" />
            <span>Cotizar por Facebook</span>
        </div>
        <div data-aos="zoom-in-up" data-aos-delay="100" className='Contact-btns-wasa'>
            <img src="/wasa.png" alt="Whatsapp" />
            <span>Cotizar por Whatsapp</span>
        </div>
      </section>
    </div>
  )
}

export default Contact
