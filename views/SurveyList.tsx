import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Heading, Button, Text } from 'native-base'

import globalStyles from '../styles/global.js'


const SurveyList = ({ navigation }: any) => {

  return (
    <View>
      <Heading style={styles.heading}>Choose one to continue</Heading>
      <Button style={globalStyles.button} onPress={() => {
        navigation.navigate('Mental Questionnaire')
      }}>
        <Text style={globalStyles.mainBtnText}>Mental</Text>
        <Text style={globalStyles.mainBtnTextSmall}>Your thoughts and feelings</Text>
      </Button>
      <Button style={globalStyles.button}
        onPress={() => {
          navigation.navigate('Social Questionnaire')
        }}
      >
        <Text style={globalStyles.mainBtnText}>Social</Text>
        <Text style={globalStyles.mainBtnTextSmall}>The ability to interact and form meaningful relationships with others</Text>
      </Button>
      <Button style={globalStyles.button} onPress={() => {
        navigation.navigate('Physical Questionnaire')
      }}>
        <Text style={globalStyles.mainBtnText}>Physical</Text>
        <Text style={globalStyles.mainBtnTextSmall}>A balanced, healthy diet,etc.</Text>
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    marginTop: 20,
    marginBottom: 20,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
})

export default SurveyList
