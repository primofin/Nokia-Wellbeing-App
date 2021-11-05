import React from 'react'
import { StyleSheet } from 'react-native'
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
      <View style={styles.wrapper}>
        <Heading size="md" style={styles.heading}>Are you sure you want to close the contact form?{'\n'}
          Your answers will not be saved</Heading>
        <HStack space={3} style={styles.buttonContainer}>
          <Button style={styles.yesBtn} bg="primary.600" onPress={() => {
            navigation.navigate('Home')
          }}>Yes</Button>
          <Button style={styles.noBtn} bg="light.400" onPress={() => navigation.goBack()}>No</Button>
        </HStack>
      </View>
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  heading: {
    marginTop: 40,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
  },
  yesBtn: {
    width: 100,
    borderRadius: 15,
  },
  noBtn: {
    width: 100,
    borderRadius: 15,
  }
})

export default CloseFormModal
