import React from 'react'

function BannerInicio() {
  return (
    <div className='BannerInicio'>
        <div className='BannerInicio-content'>
            <h1 data-aos="fade-right">Teclados Customizados</h1>
            <h3 data-aos="fade-right" data-aos-delay="100">Innovación bajo tus dedos</h3>
            <div data-aos="fade-right" data-aos-delay="200" className='BannerInicio-content-btns'>
                <a href="/#teclados">
                    <button className='BannerInicio-content-btns-pri'>Ver Teclados</button>
                </a>
                <a href="/#contacto">
                    <button className='BannerInicio-content-btns-sec'>Contactar!</button>
                </a>
            </div>
        </div>
        <img data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000" src="/img-banner.png" alt="teclado" loading="lazy" />
    </div>
  )
}

export default BannerInicio
