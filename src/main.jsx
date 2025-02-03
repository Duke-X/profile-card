import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//<StrictMode> - It helps you catch potential issues in your website, but it doesn't render anything in UI

createRoot(document.getElementById('root')).render(
  <StrictMode>               
    <App />
  </StrictMode>,
)
