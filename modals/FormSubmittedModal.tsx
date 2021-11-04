import React from 'react'
import {
  Heading,
  View,
  Button
} from 'native-base'

const FormSubmittedModal = ({ navigation }) => {
  return (
    <View>
      <Heading>Thank you!
        We will contact you as soon as possible</Heading>
      <Button onPress={() => {
        navigation.navigate('Home')
      }}>Home Page</Button>
    </View>
  )
}

export default FormSubmittedModal
