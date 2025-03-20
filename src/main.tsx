import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppLayout } from './assets/layouts/app.layout.tsx'
import { ModalProvider } from './assets/context/modal.context.tsx'
import { ModalRenderer } from './assets/shared/modal/modal-renderer.component.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ModalProvider>
        <AppLayout />
        <ModalRenderer />
      </ModalProvider>
    </BrowserRouter>
  </StrictMode>,
)
