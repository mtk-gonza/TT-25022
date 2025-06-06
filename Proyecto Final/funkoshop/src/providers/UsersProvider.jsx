import { useState, useEffect } from 'react'

import { UsersContext } from './../context/UsersContext.jsx'

import { getUsers, getUserById, createUser, updateUser, deleteUser } from './../services/userService.js'

export const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState([])
    const [errorUsers, setErrorUsers] = useState(null)
    const [isLoadingUsers, setIsLoadingUsers] = useState(false)

    const usersActions = {
        getUsers: async () => {
            setIsLoadingUsers(true)
            try {
                const response = await getUsers()
                setUsers(response)
            } catch (err) {
                setErrorUsers(err.message)
                setIsLoadingUsers(false)
            } finally {
                setIsLoadingUsers(false)
            }
        },
        getUserById: async (id) => {
            setIsLoadingUsers(true);
            try {
                return await getUserById(id);
            } catch (err) {
                setErrorUsers(err.message);
                return null;
            } finally {
                setIsLoadingUsers(false);
            }
        },
        addUser: async (newUser) => {
            setIsLoadingUsers(true)
            try {
                const user = await createUser(newUser)
                setUsers((prev) => [...prev, user])
                return user
            } catch (err) {
                setErrorUsers(err.message)
                throw err
            } finally {
                setIsLoadingUsers(false)
            }
        },
        updateUser: async (updatedUser) => {
            const updated = await updateUser(updatedUser)
            setUsers((prev) =>
                prev.map((p) => (p.id === updated.id ? updated : p))
            )
        },
        deleteUser: async (id) => {
            await deleteUser(id);
            setUsers((prev) => prev.filter((u) => u.id !== id))
        }
    }

    useEffect(() => {
        usersActions.getUsers()
    }, [])

    return (
        <UsersContext.Provider value={{
            users,
            errorUsers,
            isLoadingUsers,
            ...usersActions
        }}>
            {children}
        </UsersContext.Provider>
    )
}