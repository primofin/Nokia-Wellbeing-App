import * as React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../views/Home'
import ContactPage from '../views/ContactPage'
import CloseFormModal from '../modals/CloseFormModal';

const Stack = createNativeStackNavigator()

function Navigator() {
  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Contact Page" component={ContactPage} />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="CloseFormModal" component={CloseFormModal} />
      </Stack.Group>
    </Stack.Navigator>
  </NavigationContainer>

}

export default Navigator
