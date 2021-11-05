import React from 'react'
import { StyleSheet } from 'react-native'
import {
  FormControl,
  Heading,
  Radio,
  Text,
  TextArea,
  View,
  VStack,
} from 'native-base'

import ThemeProvider from '../context/ThemeProvider'

const Questionnaire = () => {
  const [value, setValue] = React.useState('one')

  return (
    <ThemeProvider>
      <View style={styles.viewWrapper}>
        <VStack width="90%" mx="3">
          <Heading>What is your wellbeing {'\n'}just now?</Heading>
          <Radio.Group
            name="questionnaireGroup"
            accessibilityLabel="questionnaire group"
            value={value}
            onChange={nextValue => {
              setValue(nextValue)
            }}
            style={styles.radioButtonContainer}
          >
            <View style={styles.radioButton}>
              <Radio value="one" />
              <Text>Very {'\n'}bad</Text>
            </View>
            <Radio value="two" my={1} />
            <Radio value="three" my={1} />
            <Radio value="four" my={1} />
            <View style={styles.radioButton}>
              <Radio value="five" />
              <Text>Very {'\n'}good</Text>
            </View>
          </Radio.Group>
          <FormControl isRequired style={styles.textAreaContainer}>
            <FormControl.Label>Feel free to tell us more</FormControl.Label>
            <TextArea
              h={20}
              placeholder="Anything you'd like us to know :) "
              w={{
                base: '100%',
                md: '25%',
              }}
            />
          </FormControl>
        </VStack>
      </View>
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  viewWrapper: {
    paddingTop: 20,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  radioButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  radioButton: {
    display: 'flex',
    flexDirection: 'column',
  },
  textAreaContainer: {
    marginTop: 20,
  }
})

export default Questionnaire
