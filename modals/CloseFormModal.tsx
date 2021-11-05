import React from 'react'
import {
  Heading,
  View,
  HStack,
  Button
} from 'native-base'

import ThemeProvider from '../context/ThemeProvider'

const CloseFormModal = ({ navigation }) => {
  return (
    <ThemeProvider>
      <View>
        <Heading>Are you sure you want to close the contact form?
          Your answers will not be saved</Heading>
        <HStack space={3} alignItems="center">
          <Button bg="primary.400" onPress={() => {
            navigation.navigate('Home')
          }}>Yes</Button>
          <Button bg="danger.400" onPress={() => navigation.goBack()}>No</Button>
        </HStack>
      </View>
    </ThemeProvider>
  )
}

export default CloseFormModal
