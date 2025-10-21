import { createRoot } from 'react-dom/client'
import App from './App'
import { StrictMode } from 'react'
import "./index.css"
import { BrowserRouter } from 'react-router'
import UsercontextProvider from './Usercontext'

createRoot(document.getElementById('root')).render(

<UsercontextProvider>
<App/>
</UsercontextProvider>
)

