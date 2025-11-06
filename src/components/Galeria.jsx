import { useState } from 'react'
import g1 from '../assets/images/gallery-1.svg'
import g2 from '../assets/images/gallery-2.svg'
import g3 from '../assets/images/gallery-3.svg'

const images = [g1, g2, g3, g1, g2, g3]

export default function Galeria() {
  const [active, setActive] = useState(null)
  return (
    <section id="galeria" className="section">
      <div className="container" data-aos="fade-up">
        <div className="text-center mb-5">
          <h2 className="section-title display-6">Galería</h2>
          <p className="text-muted-2">Algunos de nuestros trabajos recientes.</p>
        </div>
        <div className="row g-3">
          {images.map((src, i) => (
            <div className="col-6 col-md-4 col-lg-3" key={i}>
              <a
                href="#"
                className="d-block position-relative overflow-hidden rounded-3 border border-gold"
                data-bs-toggle="modal"
                data-bs-target="#galleryModal"
                onClick={(e) => { e.preventDefault(); setActive(src); }}
              >
                <img src={src} alt={`Trabajo ${i+1}`} className="img-fluid d-block"/>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <div className="modal fade" id="galleryModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content bg-dark-gradient">
            <div className="modal-body p-0">
              {active && <img src={active} alt="Vista ampliada" className="img-fluid w-100"/>}
            </div>
            <div className="modal-footer border-0">
              <button type="button" className="btn btn-outline-light" data-bs-dismiss="modal" onClick={() => setActive(null)}>Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
