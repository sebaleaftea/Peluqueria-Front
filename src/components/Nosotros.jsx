import barber from '../assets/images/gallery-2.svg'

export default function Nosotros() {
  return (
    <section id="nosotros" className="section">
      <div className="container" data-aos="fade-up">
        <div className="row align-items-center g-4">
          <div className="col-12 col-lg-6">
            <h2 className="section-title display-6">Nosotros</h2>
            <p className="text-muted-2">En Barbería Elegante creemos en la tradición, el detalle y el servicio impecable. Nuestro equipo combina técnicas clásicas con tendencias actuales para ofrecer una experiencia de primer nivel en cada visita.</p>
            <p className="text-muted-2">Liderados por nuestro barbero principal, con más de 10 años de experiencia, cuidamos tu estilo con productos de calidad y un ambiente exclusivo.</p>
          </div>
          <div className="col-12 col-lg-6">
            <div className="ratio ratio-16x9 border border-gold rounded-3 overflow-hidden">
              <img src={barber} alt="Barbero principal" className="w-100 h-100 object-fit-cover"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
