import React from 'react'

function Categorias() {
  return (
    <div className='Categorias'>
      <div data-aos="fade-up" className='Categorias-card1'>
        <div className='Categorias-card1-filter'></div>
        <div className='Categorias-card1-info'>
            <h2>TECLADOS</h2>
            <a href='/#teclados' className='Categorias-card1-info-btn'>
                Ver Productos
            </a>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-delay="100" className='Categorias-card2'>
        <div className='Categorias-card2-filter'></div>
        <div className='Categorias-card2-info'>
            <h2>KEYCAPS</h2>
            <a href='/#keycaps' className='Categorias-card2-info-btn'>
                Ver Productos
            </a>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-delay="200" className='Categorias-card3'>
        <div className='Categorias-card3-filter'></div>
        <div className='Categorias-card3-info'>
            <h2>SWITCHES</h2>
            <a href='/#switches' className='Categorias-card3-info-btn'>
                Ver Productos
            </a>
        </div>
      </div>
    </div>
  )
}

export default Categorias
