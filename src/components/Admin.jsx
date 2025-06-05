import React from 'react'
import { Outlet } from 'react-router-dom'

const Admin = () => {
  return (
    <div>
      this is admin

      <Outlet/>
    </div>
  )
}

export default Admin
