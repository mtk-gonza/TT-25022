import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { AppProvider } from './context/AppProvider.jsx'

import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { Home } from './layouts/Home.jsx'
import { Products } from './layouts/Products.jsx'
import { Detail } from './layouts/Detail.jsx'
import { NotFound } from './layouts/NotFound.jsx'

export const App = () => {

    return (
        <AppProvider>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/products/:product_id' element={<Detail />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </AppProvider>
    )
}