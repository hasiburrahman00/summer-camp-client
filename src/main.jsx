import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Main from './Layout/Main.jsx'
import router from './Routes/router.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router}>
                    <Main></Main>
                </RouterProvider>
            </QueryClientProvider>
        </AuthProvider>
    </React.StrictMode>,
)
