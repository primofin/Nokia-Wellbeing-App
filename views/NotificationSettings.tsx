import React from 'react'
import { StyleSheet } from 'react-native'
import { Flex, VStack, Switch, Text } from 'native-base'

import ThemeProvider from '../context/ThemeProvider'
import globalStyles from '../styles/global'

const NotificationSettings = () => {
  return (
    <ThemeProvider>
      <VStack alignItems="center" space={4} mt={10}>
        <Flex direction="row" style={styles.buttonContainer}>
          <Text>Show notifications</Text>
          <Switch size="sm" />
        </Flex>
        <Flex direction="row" style={styles.buttonContainer}>
          <Text>Wellbeing questionnaire reminder</Text>
          <Switch size="sm" />
        </Flex>
      </VStack>
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'space-between',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#e5e5e5',
    borderRadius: 15,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
  }
})

export default NotificationSettings
