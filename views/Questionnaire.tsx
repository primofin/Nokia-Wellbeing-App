import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import {
  FlatList,
  FormControl,
  Heading,
  Radio,
  Text,
  TextArea,
  View,
  VStack,
} from 'native-base'

import ThemeProvider from '../context/ThemeProvider'
import { db } from '../environment/config'
import { Question } from '../types'

const data = [
  {
    question: 'How are you?'
  },
  {
    question: 'Are you feeling weel?'
  },
  {
    question: 'Did you sleep well'
  },
  {
    question: 'Is your back hurt?'
  },
  {
    question: 'How would you rate your stress levels at work?'
  },
  {
    question: 'How would you describe your work-life balance? '
  }
]

const Questionnaire = () => {
  const [value, setValue] = useState('one')
  const [questions, setQuestions] = useState<any>([])
  const fetchQuestions = async () => {
    const response = db.collection('questions');
    const data = await response.get();
    data.docs.forEach(item => {
      const question = item.data();
      setQuestions((questions: Question[]) => [...questions, question])
    })
  }

  console.log('questions', questions)
  useEffect(() => {
    fetchQuestions();
  }, [])

  return (
    <ThemeProvider>
      <View style={styles.viewWrapper}>
        {questions && <FlatList
          data={questions}
          renderItem={({ item }) => (
            <VStack width="90%" mx="3" mb="10">
              <Heading>{item.question}</Heading>
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
            </VStack>)}
        />}
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
