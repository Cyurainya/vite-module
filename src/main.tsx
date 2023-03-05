import React from 'react'
import ReactDOM from 'react-dom/client'
// import fib from 'virtual:fib';
import App from './App'
import './index.css'

// alert(`结果: ${fib(10)}`)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
