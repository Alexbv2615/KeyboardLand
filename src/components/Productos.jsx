import React from 'react'
import Card from './Card'
import { PiArrowFatLeftBold, PiArrowFatRightBold } from "react-icons/pi";
import Slider from 'react-slick'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <PiArrowFatRightBold
        className={className}
        style={{ ...style, display: "block", color: "#444444" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <PiArrowFatLeftBold
        className={className}
        style={{ ...style, display: "block", color: "#444444" }}
        onClick={onClick}
      />
    );
  }

function Productos() {

    // CONFIGURACION PARA EL CARRUSEL
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        lazyLoad: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
        {
            breakpoint: 1600,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 1200,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 890,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
            }
        }
        ]
    };

    const teclados = [
        {
            label: 'Starter TKL',
            img: '/tecla1.png',
            name: 'MJ87 Keyboard',
            price: '169'
        },
        {
            label: 'Starter 65% with knob',
            img: '/tecla2.png',
            name: 'GMK67 Keyboard',
            price: '149'
        },
        {
            label: 'Starter 75%',
            img: '/tecla3.png',
            name: 'Monsgeek M1',
            price: '255'
        },
        {
            label: 'Starter 75%',
            img: '/tecla4.png',
            name: 'MG75W Keyboard',
            price: '129'
        },
        {
            label: 'Starter 65%',
            img: '/tecla2.png',
            name: 'GMK65 Keyboard',
            price: '139'
        }
    ]

    const keycaps = [
        {
            label: '-$25.00',
            img: '/caps1.png',
            name: 'XDA Cute Weather',
            price: '30'
        },
        {
            label: '-$20.00',
            img: '/caps2.png',
            name: 'Mahjong PBT',
            price: '40'
        },
        {
            label: '-$25.00',
            img: '/caps3.png',
            name: 'Cinnamoroll XDA',
            price: '35'
        },
        {
            label: '-$15.00',
            img: '/caps4.png',
            name: 'Sakura PBT',
            price: '50'
        },
        {
            label: '-$25.00',
            img: '/caps3.png',
            name: 'Cinnamoroll XDA',
            price: '35'
        }
    ]

    const switches = [
        {
            label: 'Gateron Linear',
            img: '/swit1.png',
            name: 'Baby Raccoon Switch',
            price: '6.90'
        },
        {
            label: 'Gateron Linear',
            img: '/swit2.png',
            name: 'Oil King Switch',
            price: '8.50'
        },
        {
            label: 'KTechs Linear',
            img: '/swit3.png',
            name: 'S1 - Peaches Switch',
            price: '8.80'
        },
        {
            label: 'KTechs Tactile',
            img: '/swit4.png',
            name: 'S2 V2 - Snow Switch',
            price: '8.80'
        },
        {
            label: 'KTechs Linear',
            img: '/swit3.png',
            name: 'S1 - Peaches Switch',
            price: '8.80'
        }
    ]

  return (
    <div className='Productos' id='productos'>
      <h1 data-aos="zoom-in-up">PRODUCTOS DISPONIBLES</h1>
      {/*===== TECLADOS =====*/}
      <section data-aos="zoom-in-up" data-aos-anchor-placement="center-bottom" className='Productos-section' id='teclados'>
        <h3 className='Productos-section-title'>TECLADOS</h3>
        <Slider className='Productos-section-slider' {...settings}>
            {
                teclados.map(({label, img, name, price}, index) => (
                    <div key={index} className='Productos-section-slider-cardContent'>
                        <Card label={label} img={img} name={name} price={price}/>
                    </div>
                ))
            }
        </Slider> 
      </section>

      {/*===== KEYCAPS =====*/}
      <section data-aos="zoom-in-up" data-aos-anchor-placement="center-bottom" className='Productos-section' id='keycaps'>
        <h3 className='Productos-section-title'>KEYCAPS</h3>
        <Slider className='Productos-section-slider' {...settings}>
            {
                keycaps.map(({label, img, name, price}, index) => (
                    <div key={index} className='Productos-section-slider-cardContent'>
                        <Card  label={label} img={img} name={name} price={price}/>
                    </div>
                ))
            }
        </Slider> 
      </section>

      {/*===== SWITCHES =====*/}
      <section data-aos="zoom-in-up" data-aos-anchor-placement="center-bottom" className='Productos-section' id='switches'>
        <h3 className='Productos-section-title'>SWITCHES</h3>
        <Slider className='Productos-section-slider' {...settings}>
            {
                switches.map(({label, img, name, price}, index) => (
                    <div key={index} className='Productos-section-slider-cardContent'>
                        <Card  label={label} img={img} name={name} price={price}/>
                    </div>
                ))
            }
        </Slider> 
      </section>
    </div>
  )
}

export default Productos
