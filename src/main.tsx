import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>  
    <App />
  </StrictMode>,
)

//LOS CABRONES DE META NO QUIEREN QUE USES MAS EL CREATE-REACT, ESTA DEPRECATED