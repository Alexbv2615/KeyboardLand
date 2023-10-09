import React from 'react'
import MediaQuery from 'react-responsive'

function Caracteristicas() {
  return (
    <div className='Caracteristicas' id='caracteristicas'>
      {/*===== MATERIAL =====*/}
      <section className='Caracteristicas-materiales'>
        <h1 data-aos="zoom-in">MATERIALES PREMIUM</h1>
        <p data-aos="zoom-in">
            La placa superior de aleación de aluminio 5052 y la base con refuerzo de acero contribuyen a la ligereza, la finura y la resistente durabilidad del teclado. Este teclado repleto de funciones está diseñado y hecho meticulosamente para un desempeño sin concesiones, y sin renunciar a la estética.
        </p>
        <img data-aos="zoom-in" src="/img-material.png" alt="img-teclado" loading="lazy" />
      </section>

      {/*===== RESISTENTE =====*/}
      <section className='Caracteristicas-resistencia'>
        <div className='Caracteristicas-resistencia-info'>
            <h1 data-aos="zoom-in-up">RESISTENTE Y DURADERO</h1>
            <p data-aos="zoom-in-up">
                Las superficies de metal bruñido y las teclas con recubrimiento oleofóbico están diseñadas para minimizar las marcas dejadas por los dedos. Una base reforzada con acero aporta una formidable resistencia al G915 para afrontar el uso más intenso.
            </p>
        </div>
        <img data-aos="zoom-in-up" src="/img-resistencia.png" alt="img-teclado2" loading="lazy" />
      </section>

      {/*===== ERGONOMICO =====*/}
      <section className='Caracteristicas-ergonomico'>
        <div className='Caracteristicas-ergonomico-info'>
            <h1 data-aos="zoom-in-up">DISEÑO ERGONÓMICO</h1>
            <p data-aos="zoom-in-up"> 
                Un diseño más fino que ningún otro hasta la fecha y los nuevos interruptores mecánicos GL de perfil bajo ofrecen un nuevo nivel de confort. El bajísimo teclado con diseño ergonómico permite una postura más confortable y natural.
            </p>
        </div>
        <img data-aos="zoom-in-up" src="/img-ergonomico.png" alt="img-teclado2" loading="lazy" />
      </section>
    </div>
  )
}

export default Caracteristicas
