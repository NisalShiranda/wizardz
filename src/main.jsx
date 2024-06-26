import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Services from './pages/Services/Services'
import Usecases from './pages/Usecases/Usecases.jsx'
import Casestudy from './pages/Casestudy/Casestudy.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Services />
    <Usecases />
    <Casestudy />
  </React.StrictMode>,
)
