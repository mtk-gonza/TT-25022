import { Routes, Route, Navigate } from 'react-router-dom'
import { Admin } from './../layouts/Admin.jsx'
import { Contact } from './../layouts/Contact.jsx'
import { Create } from './../layouts/Create.jsx'
import { Dashboard } from './../layouts/Dashboard.jsx'
import { Edit } from './../layouts/Edit.jsx'
import { Home } from './../layouts/Home.jsx'
import { Login } from './../layouts/Login.jsx'
import { Register } from './../layouts/Register.jsx'
import { Shop } from './../layouts/Shop.jsx'
import { ProtectedRoute } from './ProtectedRoute.jsx'

export const Router = ({ products, licences, categories }) => {	
	const isAuthenticated = false
	return (
		<Routes>
			<Route path='/' element={<Home products={products} licences={licences}/>} />
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
			<Route path='/shop' element={<Shop products={products}/>} />
			<Route path='/shop/:category/:licence_id?' element={<Shop products={products}/>} />
			<Route path='/contact' element={<Contact />} />
			<Route path='/admin' element={
					isAuthenticated ? (
						<Admin/>
					) :(
						<Navigate to='/login' replace state={{ from: '/admin' }} />
					)					
				}
			/>
			<Route path='/create' element={
					isAuthenticated ? (
						<Create/>
					) :(
						<Navigate to='/login' replace state={{ from: '/create' }} />
					)					
				}
			/>
			<Route path='/Edit' element={<ProtectedRoute isAuthenticated={isAuthenticated}> <Edit/> </ProtectedRoute>} />
			<Route path='/dashboard' element={<ProtectedRoute isAuthenticated={isAuthenticated}> <Dashboard/> </ProtectedRoute>} />				
			<Route path='*' element={<Navigate to='/login' replace />} />
		</Routes>
	)
}