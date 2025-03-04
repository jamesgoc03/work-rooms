import "./main.css";

import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { Router } from '@routes/AppRoutes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Router></Router>
    </BrowserRouter>
  </StrictMode>,
)
