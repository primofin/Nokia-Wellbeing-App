import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../views/Home'
import ContactPage from '../views/ContactPage'
import CloseFormModal from '../modals/CloseFormModal'
import FormSubmittedModal from '../modals/FormSubmittedModal'
import NotificationSettings from '../views/NotificationSettings'
import PersonalPage from '../views/PersonalPage';

const Stack = createNativeStackNavigator()

function Navigator() {
  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Contact Page" component={ContactPage} />
        <Stack.Screen name="My Wellbeing" component={PersonalPage} />
        <Stack.Screen name="Notifications" component={NotificationSettings} />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="CloseForm Modal" options={{ title: '' }} component={CloseFormModal} />
        <Stack.Screen name="FormSubmitted Modal" options={{ title: '' }}
          component={FormSubmittedModal} />
      </Stack.Group>
    </Stack.Navigator>
  </NavigationContainer>

}

export default Navigator
