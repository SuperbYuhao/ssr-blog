import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import App from '../pages/App.tsx'
import '../styles/globals.less'
import { BrowserRouter } from 'react-router-dom'

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
