import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AIRestaurantLanding from './AIRestaurantLanding'
import Footer from './Footer'
import { BrowserRouter } from 'react-router'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
  <AIRestaurantLanding/>
  <Footer/>
  </BrowserRouter>
  </StrictMode>,
)
