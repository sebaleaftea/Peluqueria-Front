export default function Footer(){
  const year = new Date().getFullYear()
  return (
    <footer className="mt-5 pt-5 pb-4 bg-dark-gradient border-top border-gold">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <h5 className="text-gold">Barbería Elegante</h5>
            <p className="text-muted-2">Estilo masculino con precisión y cuidado profesional.</p>
          </div>
          <div className="col-6 col-md-4">
            <h6 className="text-gold">Enlaces</h6>
            <ul className="list-unstyled">
              <li><a className="text-decoration-none text-light" href="#inicio">Inicio</a></li>
              <li><a className="text-decoration-none text-light" href="#servicios">Servicios</a></li>
              <li><a className="text-decoration-none text-light" href="#galeria">Galería</a></li>
              <li><a className="text-decoration-none text-light" href="#nosotros">Nosotros</a></li>
              <li><a className="text-decoration-none text-light" href="#contacto">Contacto</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-4">
            <h6 className="text-gold">Contacto</h6>
            <ul className="list-unstyled text-muted-2">
              <li>Av. Principal 123, Santiago</li>
              <li>+56 9 1111 2222</li>
              <li>contacto@barberiaelegante.cl</li>
            </ul>
          </div>
        </div>
        <hr className="border-gold opacity-50 my-4"/>
        <div className="d-flex justify-content-between align-items-center">
          <small className="text-muted-2">© {year} Barbería Elegante. Todos los derechos reservados.</small>
          <div className="d-flex gap-3">
            <a href="#" className="text-decoration-none text-light">Instagram</a>
            <a href="#" className="text-decoration-none text-light">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
