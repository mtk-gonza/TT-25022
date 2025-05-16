import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Admin } from '../layouts/Admin.jsx'
import { Contact } from '../layouts/Contact.jsx'
import { Create } from '../layouts/Create.jsx'
import { Dashboard } from '../layouts/Dashboard.jsx'
import { Edit } from '../layouts/Edit.jsx'
import { Home } from '../layouts/Home.jsx'
import { Login } from '../layouts/Login.jsx'
import { Register } from '../layouts/Register.jsx'
import { Shop } from '../layouts/Shop.jsx'
import { ProtectedRoute } from './ProtectedRoute.jsx'

import { useProducts } from './../hooks/useProducts.jsx'		

export const AppRoutes = () => {
	const { products } = useProducts()
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
			<Route path='/shop' element={<Shop products={products} />} />
			<Route path='/shop/:category/:licence_id?' element={<Shop products={products} />} />
			<Route path='/contact' element={<Contact />} />
			<Route path='/admin' element={<ProtectedRoute> <Admin/> </ProtectedRoute>} />
			<Route path='/create' element={<ProtectedRoute> <Create/> </ProtectedRoute>} />
			<Route path='/edit' element={<ProtectedRoute> <Edit/> </ProtectedRoute>} />
			<Route path='/dashboard' element={<ProtectedRoute> <Dashboard/> </ProtectedRoute>} />				
			<Route path='*' element={<Navigate to='/login' replace />} />
		</Routes>
	)
}