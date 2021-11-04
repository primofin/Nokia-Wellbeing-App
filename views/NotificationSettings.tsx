import { Flex, VStack, Switch, Text } from 'native-base'
import React from 'react'

const NotificationSettings = () => {
  return (
    <VStack alignItems="center" space={4}>
      <Flex direction="row">
        <Text>Show notifications</Text>
        <Switch size="sm" />
      </Flex>
      <Flex direction="row">
        <Text>Wellbeing questionnaire reminder</Text>
        <Switch size="sm" />
      </Flex>
    </VStack>
  )
}

export default NotificationSettings
