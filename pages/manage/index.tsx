import Admin from '@/components/screens/Admin/home/Admin'
import { NextPageAuth } from '@/shared/types/auth.types'
import React from 'react'

const AdminPage : NextPageAuth = () => {
  return (
    <Admin/>
  )
}

AdminPage.isOnlyAdmin = true

export default AdminPage