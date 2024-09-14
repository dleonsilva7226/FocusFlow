import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Timer from './Timer/Timer.jsx'
// import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Timer />
  </StrictMode>,
)
