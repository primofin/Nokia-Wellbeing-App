import React from 'react'
import { NativeBaseProvider } from 'native-base'

import Navigator from './navigators/Navigator'
import { UserInforProvider } from './context/UserContext'

export default function App() {
  return (
    <NativeBaseProvider>
      <UserInforProvider>
        <Navigator />
      </UserInforProvider>
    </NativeBaseProvider>
  )
}
