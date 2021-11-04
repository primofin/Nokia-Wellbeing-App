import React from 'react'
import {
  Heading,
  View,
  HStack,
  Button
} from 'native-base'

const CloseFormModal = ({ navigation }) => {
  return (
    <View>
      <Heading>Are you sure you want to close the contact form?
        Your answers will not be saved</Heading>
      <HStack space={3} alignItems="center">
        <Button onPress={() => {
          navigation.navigate('Home')
        }}>Yes</Button>
        <Button onPress={() => navigation.goBack()}>No</Button>
      </HStack>

    </View>
  )
}

export default CloseFormModal
