import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import { AppcontextProvider } from './Store/Appcontext.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { AuthContxtProvider } from './Store/AuthContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContxtProvider>

    <AppcontextProvider>
   <ToastContainer theme='dark' position='top-right' autoClose={3000} closeOnClick pauseOnHover={false}/>
    <App />
    </AppcontextProvider>
    </AuthContxtProvider>
  </StrictMode>
)
