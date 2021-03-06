import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../views/Home'
import ContactPage from '../views/ContactPage'
import CloseFormModal from '../modals/CloseFormModal'
import FormSubmittedModal from '../modals/FormSubmittedModal'
import NotificationSettings from '../views/NotificationSettings'
import PersonalPage from '../views/PersonalPage'
import MentalQuestionnaire from '../views/MentalQuestionnaire'
import QuestionnaireSubmitModal from '../modals/QuestionnaireSubmitForm'
import SurveyList from '../views/SurveyList'
import SocialQuestionnaire from '../views/SocialQuestionnaire'
import PhysicalQuestionnaire from '../views/PhysicalQuestionnaire'


const Stack = createNativeStackNavigator()

function Navigator() {
  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="Home" options={{ title: '' }} component={Home} />
        <Stack.Screen name="Mental Questionnaire" component={MentalQuestionnaire} />
        <Stack.Screen name="Social Questionnaire" component={SocialQuestionnaire} />
        <Stack.Screen name="Physical Questionnaire" component={PhysicalQuestionnaire} />
        <Stack.Screen name="Contact Page" component={ContactPage} />
        <Stack.Screen name="My Wellbeing" options={{ title: 'My Well-being' }} component={PersonalPage} />
        <Stack.Screen name="Notifications" component={NotificationSettings} />
        <Stack.Screen name="Questionnaire List" component={SurveyList} />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="CloseForm Modal" options={{ title: '' }} component={CloseFormModal} />
        <Stack.Screen name="FormSubmitted Modal" options={{ title: '' }}
          component={FormSubmittedModal} />
        <Stack.Screen name="Questionnaire Submitted Modal" options={{ title: '' }}
          component={QuestionnaireSubmitModal} />
      </Stack.Group>
    </Stack.Navigator>
  </NavigationContainer>

}

export default Navigator
