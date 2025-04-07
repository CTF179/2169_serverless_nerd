import React from 'react'
import { User } from './AppDemo'
import SidebarComponent from './SidebarComponent'
import ProfileComponent from './ProfileComponent'

interface DashboardProps{}

function DashboardComponent({}: DashboardProps) {
  return (
    <>
        <SidebarComponent/>
        <ProfileComponent/>
    </>
  )
}

export default DashboardComponent