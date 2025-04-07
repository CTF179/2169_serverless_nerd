import React, { useState } from 'react'
import DashboardComponent from './DashboardComponent';
import { DashboardContext } from './context';

export interface User {
    isSubscribed: boolean;
    name: string;
}

interface DemoProps {}

function AppDemo({}: DemoProps) {

    const [user] = useState<User>({
        isSubscribed: true,
        name: "user1"
    })

  return (
    <>
        <DashboardContext.Provider value={user}>
            <DashboardComponent/>
        </DashboardContext.Provider>
    </>
  )
}

export default AppDemo