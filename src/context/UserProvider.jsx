import { useQuery } from '@tanstack/react-query'
import React, { createContext, useEffect, useState } from 'react'
import useAuth from '../hook/useAuth'
import apiReq from '../utils/axiosInstance'
import { Typography } from '@mui/material'


export const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const { token } = useAuth()

  const { data, isLoading, error } = useQuery({
    enabled: !!token,
    queryKey: ['user'],
    queryFn: () => apiReq.get('/api/me',)
  })
  useEffect(() => {
    if (data) {
      setUser(data.data.buyer)
    }
  }, [data])

  if (error?.code === "ERR_NETWORK") {
    return <Typography variant='h5' sx={{ pt: 12, textAlign: 'center', color: 'red' }}>Network Error</Typography>
  }

  return (
    <UserContext.Provider value={{ user, isLoading }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider