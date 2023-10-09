import BannerInicio from './components/BannerInicio';
import Caracteristicas from './components/Caracteristicas';
import Categorias from './components/Categorias';
import Clientes from './components/Clientes';
import Contact from './components/Contact';
import Productos from './components/Productos';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import './sass/index.scss';

function App() {

  return (
    <>
      <Navbar/>
      <ScrollToTop/>
      <BannerInicio/>
      <Categorias/>
      <Caracteristicas/>
      <Productos/>
      <Clientes/>
      <Contact/>
    </>
  )
}

export default App
