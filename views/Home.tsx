import React from 'react'
import { View } from 'react-native'
import { Heading, Button, Text } from 'native-base'

const Home = ({ navigation }) => {
  return (
    <View>
      <Heading size="xl">Welcome back!</Heading>
      <Button onPress={() => console.log('hello world')}>
        Wellbeing Questionnaire
        <Text fontSize="xs">How are you feeling today?</Text>
      </Button>
      <Button
        onPress={() => {
          navigation.navigate('Contact Page')
        }}
      >
        Contact assistance
        <Text fontSize="xs">Need to talk or ask for help?</Text>
      </Button>
      <Button onPress={() => console.log('hello world')}>
        My wellbeing
        <Text fontSize="xs">How have you been lately?</Text>
      </Button>
      <Button onPress={() => console.log('hello world')}>
        Notification settings
      </Button>
    </View>
  )
}

export default Home
