import React from 'react'
import { NativeBaseProvider } from 'native-base'

import Navigator from './navigators/Navigator'

export default function App() {
  return (
    <NativeBaseProvider>
      <Navigator />
    </NativeBaseProvider>
  )
}
