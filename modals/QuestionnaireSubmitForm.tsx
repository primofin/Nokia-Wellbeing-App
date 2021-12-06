import React from 'react'
import { StyleSheet } from 'react-native'
import {
  Text,
  View,
  Button
} from 'native-base'

import ThemeProvider from '../context/ThemeProvider'

const QuestionnaireSubmitModal = ({ navigation }) => {
  return (
    <ThemeProvider>
      <View style={styles.wrapper}>
        <Text bold fontSize="3xl">Thank you! {'\n'}
          Your submission has been sent</Text>
        <Button style={styles.back_button} size="sm" bg="primary.600" onPress={() => {
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
    marginTop: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  back_button: {
    marginTop: 20,
    width: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 20,
    paddingRight: 20,

  }
})

export default QuestionnaireSubmitModal
