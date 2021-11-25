import React from 'react'
import { NativeBaseProvider } from 'native-base'

import theme from '../styles/theme'

export default function ThemeProvider(props: any) {
  return <NativeBaseProvider theme={theme}>{props.children}</NativeBaseProvider>
}
