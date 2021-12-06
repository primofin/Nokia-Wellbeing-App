import React, { useContext } from 'react'
import { View } from 'react-native'
import { Heading, Button, Text } from 'native-base'

import globalStyles from '../styles/global.js'
import { UserContext } from '../context/UserContext'


const Home = ({ navigation }: any) => {
  const context = useContext(UserContext)
  const username = context.user.name

  return (
    <View>
      <Heading style={globalStyles.heading}>{username ? `Welcome back, ${username}!` : 'Welcome to Wellco!'}</Heading>
      <Button style={globalStyles.button} onPress={() => {
        navigation.navigate('Questionnaire')
      }}>
        <Text style={globalStyles.mainBtnText}>Well-being Questionnaire</Text>
        <Text style={globalStyles.mainBtnTextSmall}>How are you feeling today?</Text>
      </Button>
      <Button style={globalStyles.button}
        onPress={() => {
          navigation.navigate('Contact Page')
        }}
      >
        <Text style={globalStyles.mainBtnText}>Contact assistance</Text>
        <Text style={globalStyles.mainBtnTextSmall}>Need to talk or ask for help?</Text>
      </Button>
      <Button style={globalStyles.button} onPress={() => {
        navigation.navigate('My Wellbeing')
      }}>
        <Text style={globalStyles.mainBtnText}>My Well-being</Text>
        <Text style={globalStyles.mainBtnTextSmall}>How have you been lately?</Text>
      </Button>
      <Button style={globalStyles.button} onPress={() => {
        navigation.navigate('Notifications')
      }}>
        <Text style={globalStyles.mainBtnText}>Notification settings</Text>
        <Text style={globalStyles.mainBtnTextSmall}>Want notifications?</Text>
      </Button>
    </View>
  )
}

export default Home
