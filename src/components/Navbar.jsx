import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {

  //menu responsive
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    menu ? setMenu(false) : setMenu(true);
  };

  return (
    <div className='Navbar'>
      <a className='Navbar-img' href="/#">
        <img loading="lazy" src="./logo.png" alt="logo" />
      </a>
      <div className='Navbar-content'>
        <a href='/#caracteristicas'>
          <p>Características</p>
        </a>
        <a href='/#productos'>
          <p>Productos</p>
        </a>
        <a href='/#clientes'>
          <p>Clientes</p>
        </a>
        <a href='/#contacto'>
          <p>Contacto</p>
        </a>
        <a href='/#contacto'>
          <button className='Navbar-content-btn'>Cotizar Ya!</button>
        </a>
      </div>
      {
        !menu && <FaBars onClick={toggleMenu} className='Navbar-resOpen'/>
      }
      {
        <div className={`Navbar-minimenu ${menu ? 'active' : ''}`}>
            <FaTimes onClick={toggleMenu} className='Navbar-resClose'/>
            <a onClick={toggleMenu} href='/#caracteristicas'>
              <p>Características</p>
            </a>
            <a onClick={toggleMenu} href='/#productos'>
              <p>Productos</p>
            </a>
            <a onClick={toggleMenu} href='/#clientes'>
              <p>Clientes</p>
            </a>
            <a onClick={toggleMenu} href='/#contacto'>
              <p>Contacto</p>
            </a>
            <button className='Navbar-content-btn'>Cotizar Ya!</button>
        </div>
      }
    </div>
  )
}

export default Navbar
