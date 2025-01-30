import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/tabouret.scss'
import Tabouret from './components/Tabouret.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Tabouret></Tabouret>
  </StrictMode>,
)
