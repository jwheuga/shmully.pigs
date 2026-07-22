import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import './styles/fonts.css'
import './styles/global.css'

// Outermost boundary — catches crashes anywhere in the tree, INCLUDING the
// router itself, and auto-recovers with a reload instead of a blank screen.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
