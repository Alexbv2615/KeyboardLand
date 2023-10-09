import React from 'react'

function Clientes() {
  return (
    <div className='Clientes' id='clientes'>
      <h1 data-aos="zoom-in-up">Opiniones de Clientes</h1>
      <section className='Clientes-content'>

        {/* OPINION 1 */}
        <div data-aos="zoom-in-up" data-aos-anchor-placement="center-bottom" className='Clientes-content-opinion'>
            <div className='Clientes-content-opinion-coment'>
              <h3>Bonito Teclado</h3>
              <p>
                  “Es un teclado con case semi transparente que deja el RGB pasar a través de ella y estando apagada se ve sombria, Buen case y fácil de usar” 
              </p>
            </div>
            <div className='Clientes-content-opinion-user'>
              <h2>Marcelo Rios</h2>
              <div className='Clientes-content-opinion-user-calification'>
                  <img src="/star.svg" alt="star" />
                  <img src="/star.svg" alt="star" />
                  <img src="/star.svg" alt="star" />
                  <img src="/star.svg" alt="star" />
                  <img src="/star.svg" alt="star" />
              </div>
            </div>
        </div>

        {/* OPINION 2 */}
        <div data-aos="zoom-in-up" data-aos-anchor-placement="center-bottom" data-aos-delay="100" className='Clientes-content-opinion'>
            <div  className='Clientes-content-opinion-coment'>
              <h3>Excelente Atención</h3>
              <p>
                “Excelente atención, buenos precios y buena calidad de productos. Recomendado 100%”
              </p>
            </div>
            <div className='Clientes-content-opinion-user'>
              <h2>Nicolas García</h2>
              <div className='Clientes-content-opinion-user-calification'>
                  <img src="/star.svg" alt="star" />
                  <img src="/star.svg" alt="star" />
                  <img src="/star.svg" alt="star" />
                  <img src="/star.svg" alt="star" />
              </div>
            </div>
        </div>

        {/* OPINION 3 */}
        <div data-aos="zoom-in-up" data-aos-anchor-placement="center-bottom" data-aos-delay="200" className='Clientes-content-opinion'>
            <div className='Clientes-content-opinion-coment'>
              <h3>Buenísimo!</h3>
              <p>
                  “Hermosos keycaps.” 
              </p>
            </div>
            <div className='Clientes-content-opinion-user'>
              <h2>David Gomez</h2>
              <div className='Clientes-content-opinion-user-calification'>
                  <img src="/star.svg" alt="star" />
                  <img src="/star.svg" alt="star" />
                  <img src="/star.svg" alt="star" />
                  <img src="/star.svg" alt="star" />
                  <img src="/star.svg" alt="star" />
              </div>
            </div>
        </div>

      </section>
    </div>
  )
}

export default Clientes
