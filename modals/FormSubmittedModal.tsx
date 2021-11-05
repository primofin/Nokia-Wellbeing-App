import React from 'react'
import { StyleSheet } from 'react-native'
import {
  Text,
  View,
  Button,
  Center
} from 'native-base'

import ThemeProvider from '../context/ThemeProvider'

const FormSubmittedModal = ({ navigation }) => {
  return (
    <ThemeProvider>
      <View style={styles.wrapper}>
        <Text bold fontSize="3xl">Thank you! {'\n'}
          We will contact you as soon as possible</Text>
        <Button size="sm" bg="primary.600" onPress={() => {
          navigation.navigate('Home')
        }}>Home Page</Button>
      </View>
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
})

export default FormSubmittedModal
