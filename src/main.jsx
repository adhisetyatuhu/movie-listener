import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'; 
import Popper from 'popper.js'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)