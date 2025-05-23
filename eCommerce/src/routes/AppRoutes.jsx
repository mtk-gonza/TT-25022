import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Home } from './../layouts/Home.jsx'
import { Login } from './../layouts/Login.jsx'
import { Register } from './../layouts/Register.jsx'
import { Detail } from './../layouts/Detail.jsx'
import { Contact } from './../layouts/Contact.jsx'
import { Favorites } from '../layouts/Favorites.jsx'
import { Dashboard } from './../layouts/Dashboard.jsx'
import { Unauthorized } from './../layouts/Unauthorized.jsx'
import { NotFound } from './../layouts/NotFound.jsx'

import { ProtectedRoute } from './ProtectedRoute.jsx'

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
			<Route path='/products/:product_id?' element={<Detail/>} />
			<Route path='/contact' element={<Contact />} />
			<Route path='/favorites' element={<ProtectedRoute allowedRoles={['guest', 'admin']}> <Favorites/> </ProtectedRoute>} />
			<Route path='/dashboard' element={<ProtectedRoute allowedRoles={['admin']}> <Dashboard/> </ProtectedRoute>} />		
			<Route path='/unauthorized'	element={<Unauthorized/>} />		
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}