import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Global styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/theme.css'
import './index.css'
import 'aos/dist/aos.css'
// Bootstrap JS (collapse, modal, etc.)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
