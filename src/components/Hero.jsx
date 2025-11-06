import heroBg from '../assets/images/hero.svg'

export default function Hero() {
  return (
    <header id="inicio" className="position-relative" style={{ minHeight: '90vh', backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100"></div>
      <div className="container h-100 position-relative" data-aos="fade-up">
        <div className="row h-100 align-items-center">
          <div className="col-lg-8">
            <h1 className="display-4 fw-bold">
              <span className="text-gold">Estilo</span>, Precisión y Confianza
            </h1>
            <p className="lead text-muted-2 mb-4">Experiencia premium en cuidado masculino: cortes clásicos y modernos, afeitado a navaja y perfilado de barba.</p>
            <div className="d-flex gap-3">
              <a href="#contacto" className="btn btn-gold btn-lg">Reserva tu cita</a>
              <a className="btn btn-outline-light btn-lg" href="https://wa.me/56911112222" target="_blank" rel="noreferrer">Agendar por WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
