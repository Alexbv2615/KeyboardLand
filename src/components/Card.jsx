import React from 'react'

function Card({ label, img, name, price }) {
  return (
    <div className='Card'>
      <span className='Card-label'>{label}</span>
      <img src={img} alt="img-product" loading="lazy" />
      <h2>{name}</h2>
      <h3>Desde ${price}</h3>
      <a href='/#contacto'>Comprar</a>
    </div>
  )
}

export default Card
