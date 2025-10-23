import { createRoot } from 'react-dom/client'
import App from './App'
import { StrictMode } from 'react'
import "./index.css"
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
<App/>
</BrowserRouter>
)

