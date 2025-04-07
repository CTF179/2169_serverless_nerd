import React, { useContext } from 'react'
import { DashboardContext } from './context'

interface ProfileProps {}

function ProfileComponent({}: ProfileProps) {

    const user = useContext(DashboardContext);
  return (
    <div> {user && user.name} </div>
  )
}

export default ProfileComponent