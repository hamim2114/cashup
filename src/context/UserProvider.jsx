import { useQuery } from '@tanstack/react-query'
import React, { createContext, useEffect, useState } from 'react'
import useAuth from '../hook/useAuth'
import apiReq from '../utils/axiosInstance'


export const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const { token } = useAuth()

  const { data, isLoading } = useQuery({
    enabled: !!token,
    queryKey: ['user'],
    queryFn: () => apiReq.get('/api/me',)
  })
  useEffect(() => {
    if (data) {
      setUser(data.data.buyer)
    }
  }, [data])
  return (
    <UserContext.Provider value={{ user, isLoading }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider