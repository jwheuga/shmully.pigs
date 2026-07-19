// Bundle loaded fine — clear the stale-deploy recovery flag so a future
// failure can trigger its one reload.
sessionStorage.removeItem('shmully-recovered')

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/fonts.css'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
