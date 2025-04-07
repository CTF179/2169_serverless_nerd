import React, { useContext } from 'react'
import { User } from './AppDemo'
import { DashboardContext } from './context'

interface SidebarProps {}
function SidebarComponent({}: SidebarProps) {
    const user = useContext(DashboardContext);
  return (

    <>
        <div>{user?.name}</div>
        <div>Subscription Status: {user?.isSubscribed ? "Yes" : "No"}</div>
    </>
  )
}

export default SidebarComponent