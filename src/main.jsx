import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Main from './Layout/Main.jsx'
import router from './Routes/router.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router}>
                <Main></Main>
            </RouterProvider>
        </AuthProvider>
    </React.StrictMode>,
)
