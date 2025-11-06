import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Servicios from '../components/Servicios'
import Galeria from '../components/Galeria'
import Nosotros from '../components/Nosotros'
import Contacto from '../components/Contacto'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div>
      <Navbar />
      <main className="pt-5">
        <Hero />
        <Servicios />
        <Galeria />
        <Nosotros />
        <Contacto />
      </main>
      <Footer />
    </div>
  )
}
