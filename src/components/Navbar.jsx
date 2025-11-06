import logo from '../assets/images/logo.svg'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark-gradient fixed-top border-bottom border-gold">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#inicio">
          <img src={logo} height="30" alt="Barbería Elegante Logo" />
          <span className="fw-bold text-gold">Barbería Elegante</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#inicio">Inicio</a>
            </li>
            <li className="nav-item"><a className="nav-link" href="#servicios">Servicios</a></li>
            <li className="nav-item"><a className="nav-link" href="#galeria">Galería</a></li>
            <li className="nav-item"><a className="nav-link" href="#nosotros">Nosotros</a></li>
            <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
