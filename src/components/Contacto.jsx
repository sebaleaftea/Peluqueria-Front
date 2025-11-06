import { useState } from 'react'

function IconInstagram(props){return(<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>)}
function IconFacebook(props){return(<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12"/></svg>)}
function IconWhatsapp(props){return(<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M20 3.5A10.5 10.5 0 0 0 3.2 16.2L2 22l5.9-1.6A10.5 10.5 0 1 0 20 3.5Zm-9.2 3a6.5 6.5 0 0 1 6.6 6.6 6.5 6.5 0 0 1-9.4 5.8l-.3-.1-3.5 1 1-3.4-.1-.3a6.5 6.5 0 0 1 5.7-9.6Zm3.9 3.9c-.2 0-.4 0-.5.3-.1.3-.2.6-.5 1-.2.2-.5.5-1 .5s-1.3-.4-2.1-1.2c-.8-.9-1.2-1.6-1.1-2 .1-.5.6-.6.9-.6h.2c.1 0 .2 0 .3.2l.4.8c.1.2.1.3 0 .5l-.2.3c-.1.1-.1.3 0 .4.1.3.4.7.9 1.1.4.4.9.6 1.1.7.1 0 .3 0 .4-.1l.3-.4c.1-.1.2-.1.4 0l.9.4c.2.1.2.2.3.3v.3c-.3 1.1-1 1.6-1.8 1.6-.3 0-.7-.1-1.1-.3-.7-.3-1.5-.9-2.2-1.7-.5-.6-1-1.3-1.3-2-.3-.8-.3-1.4-.2-1.9.3-1.1 1.2-1.7 2.4-1.7.4 0 .8.1 1.2.3.3.1.6.3.8.5.3.2.5.3.6.6.1.2.1.4.1.5 0 .4-.1.7-.2.9Z"/></svg>)}

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', correo: '', mensaje: '' })
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const onSubmit = (e) => { e.preventDefault(); alert('Gracias, nos pondremos en contacto pronto.'); setForm({ nombre:'', correo:'', mensaje:'' }) }

  return (
    <section id="contacto" className="section">
      <div className="container" data-aos="fade-up">
        <div className="row g-4">
          <div className="col-12 col-lg-6">
            <h2 className="section-title display-6">Contacto</h2>
            <p className="text-muted-2">¿Tienes preguntas o quieres agendar? Escríbenos y te responderemos a la brevedad.</p>
            <form onSubmit={onSubmit} className="mt-3">
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input name="nombre" value={form.nombre} onChange={onChange} type="text" className="form-control bg-dark text-light border-gold" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Correo</label>
                <input name="correo" value={form.correo} onChange={onChange} type="email" className="form-control bg-dark text-light border-gold" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Mensaje</label>
                <textarea name="mensaje" value={form.mensaje} onChange={onChange} rows="4" className="form-control bg-dark text-light border-gold" required />
              </div>
              <button className="btn btn-gold">Enviar</button>
            </form>
          </div>
          <div className="col-12 col-lg-6">
            <div className="card card-dark h-100">
              <div className="card-body">
                <h5 className="text-gold">Agenda directa</h5>
                <p className="text-muted-2">También puedes agendar por WhatsApp o escribirnos en redes sociales.</p>
                <div className="d-flex flex-column gap-2 mt-3">
                  <a className="btn btn-outline-light" href="https://wa.me/56911112222" target="_blank" rel="noreferrer">
                    <IconWhatsapp className="me-2"/> Agendar por WhatsApp
                  </a>
                  <div className="d-flex align-items-center gap-3 mt-2">
                    <a href="#" className="text-decoration-none text-light"><IconInstagram/> <span className="ms-1">Instagram</span></a>
                    <a href="#" className="text-decoration-none text-light"><IconFacebook/> <span className="ms-1">Facebook</span></a>
                  </div>
                </div>
                <hr className="my-4 border-gold opacity-50"/>
                <h6 className="text-gold">Datos</h6>
                <ul className="list-unstyled text-muted-2 mb-0">
                  <li>Dirección: Av. Principal 123, Santiago</li>
                  <li>Teléfono: +56 9 1111 2222</li>
                  <li>Horario: Lun–Sáb 10:00–20:00</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
