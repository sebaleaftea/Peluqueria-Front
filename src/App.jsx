import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import './App.css'
import Home from './pages/Home'

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic' })
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Future routes: /servicios, /galeria, /nosotros, /contacto */}
      </Routes>
    </BrowserRouter>
  )
}
