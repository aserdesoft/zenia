import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Para medir Web Vitals (INP, LCP, CLS):
// 1. Instalar: npm install web-vitals
// 2. Descomentar las siguientes líneas:
// import reportWebVitals, { logWebVitals } from './utils/reportWebVitals'
// reportWebVitals(logWebVitals)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
