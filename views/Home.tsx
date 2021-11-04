import React from 'react'
import { View } from 'react-native'
import { Heading, Button, Text } from 'native-base'
import  globalStyles  from '../styles/global.js'

const Home = ({ navigation }) => {
  return (
    <View>
      <Heading style={globalStyles.heading}>Welcome back!</Heading>
      <Button style={globalStyles.button} onPress={() => console.log('hello world')}>
        <Text style={globalStyles.mainBtnText}>Wellbeing Questionnaire</Text>
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
      <Button style={globalStyles.button} onPress={() => console.log('hello world')}>
        <Text style={globalStyles.mainBtnText}>My wellbeing</Text>
        <Text style={globalStyles.mainBtnTextSmall}>How have you been lately?</Text>
      </Button>
      <Button style={globalStyles.button} onPress={() => console.log('hello world')}>
        <Text style={globalStyles.mainBtnText}>Notification settings</Text>
        <Text style={globalStyles.mainBtnTextSmall}>Want notifications?</Text>
      </Button>
    </View>
  )
}

export default Home
