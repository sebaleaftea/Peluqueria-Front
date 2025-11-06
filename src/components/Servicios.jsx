const servicios = [
  { titulo: 'Corte Clásico', precio: 12000, desc: 'Corte tradicional con terminaciones a tijera.' },
  { titulo: 'Afeitado Premium', precio: 10000, desc: 'Afeitado a navaja con toalla caliente y bálsamo.' },
  { titulo: 'Perfilado de Barba', precio: 8000, desc: 'Definición de contornos y hidratación.' },
  { titulo: 'Paquete Completo', precio: 18000, desc: 'Corte + Perfilado de Barba + Estilizado.' },
  { titulo: 'Corte Fade', precio: 14000, desc: 'Degradado preciso con máquina y tijera.' },
  { titulo: 'Niños', precio: 9000, desc: 'Cortes modernos para los más pequeños.' },
]

export default function Servicios() {
  return (
    <section id="servicios" className="section">
      <div className="container" data-aos="fade-up">
        <div className="text-center mb-5">
          <h2 className="section-title display-6">Servicios</h2>
          <p className="text-muted-2">Calidad profesional, detalle y dedicación en cada servicio.</p>
        </div>
        <div className="row g-4">
          {servicios.map((s) => (
            <div key={s.titulo} className="col-12 col-sm-6 col-lg-4">
              <div className="card card-dark h-100">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-gold">{s.titulo}</h5>
                  <p className="card-text text-muted-2 flex-grow-1">{s.desc}</p>
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="fs-5 fw-semibold">${'{'}s.precio.toLocaleString('es-CL'){'}'}</span>
                    <a href="#contacto" className="btn btn-sm btn-gold">Reservar</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
