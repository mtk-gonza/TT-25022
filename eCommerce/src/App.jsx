import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './routes/AppRoutes.jsx'

import { AppProvider } from './context/AppProvider.jsx'

import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'

export const App = () => {

    return (
        <AppProvider>
            <BrowserRouter>
                <Header/>
                <AppRoutes />
                <Footer />
            </BrowserRouter>
        </AppProvider>
    )
}