import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Admin } from './../layouts/Admin.jsx'
import { Contact } from './../layouts/Contact.jsx'
import { Create } from './../layouts/Create.jsx'
import { Dashboard } from './../layouts/Dashboard.jsx'
import { Edit } from './../layouts/Edit.jsx'
import { Home } from './../layouts/Home.jsx'
import { Login } from './../layouts/Login.jsx'
import { Register } from './../layouts/Register.jsx'
import { Shop } from './../layouts/Shop.jsx'
import { Returns } from './../layouts/Returns.jsx'
import { Terms } from './../layouts/Terms.jsx'
import { Privacy } from './../layouts/Privacy.jsx'
import { Unauthorized } from './../layouts/Unauthorized.jsx'
import { NotFound } from './../layouts/NotFound.jsx'

import { ProtectedRoute } from './ProtectedRoute.jsx'

export const AppRoutes = () => {

	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
			<Route path='/shop' element={<Shop />} />
			<Route path='/shop/:category_name/:licence_id?' element={<Shop  />} />
			<Route path='/contact' element={<Contact />} />
			<Route path='/admin' element={<ProtectedRoute> <Admin/> </ProtectedRoute>} />
			<Route path='/create' element={<ProtectedRoute> <Create/> </ProtectedRoute>} />
			<Route path='/edit' element={<ProtectedRoute> <Edit/> </ProtectedRoute>} />
			<Route path='/dashboard' element={<ProtectedRoute allowedRoles={['admin']}> <Dashboard/> </ProtectedRoute>} />	
			<Route path='/returns' element={<Returns/>} />		
			<Route path='/terms' element={<Terms/>} />		
			<Route path='/privacy' element={<Privacy/>} />		
			<Route path='/unauthorized'	element={<Unauthorized/>} />		
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}