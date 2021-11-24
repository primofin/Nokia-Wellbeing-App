import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import {
  Button,
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

const Questionnaire = () => {
  const [questions, setQuestions] = useState<any>([
    {
      id: 'ad32',
      question: 'How are you today?',
      weight: 1,
    },
  ])
  const [submitValues, setSubmitValues] = useState([
    {
      id: '1a',
      question: 'How are you today?',
      weight: 1,
      answer: 'very good',
      additionalInfo: 'none',
    },
  ])

  /**
   * Fetch data (collection: questions) from Firestore
   */
  const fetchQuestions = async () => {
    const response = db.collection('questions')
    const data = await response.get()
    data.docs.forEach(item => {
      let question = item.data()
      question = { ...question, id: item.id }
      console.log('item', item.id)
      setQuestions((questions: Question[]) => [...questions, question])
    })
  }

  const submitAnswers = (e: any) => {
    e.preventDefault()
    db.collection('surveys')
      .add({ data: [...submitValues] })
      .then(docRef => {
        console.log('submit success')
      })
      .catch(error => {
        console.error('Error adding document: ', error)
      })
  }

  const onSubmit = (e: any) => {
    submitAnswers(e)
  }

  const handleChangeTextarea = (e: any, question: Question) => {
    let updatedVal = submitValues.find(val => val.id === question.id)
    if (updatedVal) {
      updatedVal = { ...updatedVal, additionalInfo: e.currentTarget.value }
      setSubmitValues([...submitValues, updatedVal])
    } else {
      setSubmitValues([
        ...submitValues,
        {
          id: question.id,
          question: question.question,
          weight: question.weight,
          answer: '',
          additionalInfo: e.currentTarget.value,
        },
      ])
    }
  }

  const getTextareapValue = (id: string) => {
    const updatedVal = submitValues.find(val => val.id === id)
    if (updatedVal) {
      return updatedVal?.additionalInfo
    }
    return ''
  }

  const getRadioGroupValue = (id: string) => {
    const updatedVal = submitValues.find(val => val.id === id)
    if (updatedVal) {
      return updatedVal?.answer
    }
    return 'very good'
  }

  const handleChangeRadioGroup = (value: string, question: Question) => {
    let updatedVal = submitValues.find(val => val.id === question.id)
    if (updatedVal) {
      updatedVal = { ...updatedVal, answer: value }
      setSubmitValues([...submitValues, updatedVal])
    } else {
      setSubmitValues([
        ...submitValues,
        {
          id: question.id,
          question: question.question,
          weight: question.weight,
          answer: value,
          additionalInfo: '',
        },
      ])
    }
  }

  useEffect(() => {
    fetchQuestions()
  }, [])

  return (
    <ThemeProvider>
      <View style={styles.viewWrapper}>
        {questions && (
          <FlatList
            data={questions}
            renderItem={({ item }) => (
              <VStack width="90%" mx="3" mb="10">
                <Heading>{item.question}</Heading>
                <Radio.Group
                  defaultValue="five"
                  name="questionnaireGroup"
                  accessibilityLabel="questionnaire group"
                  value={getRadioGroupValue(item.id)}
                  onChange={nextValue => {
                    handleChangeRadioGroup(nextValue, item)
                  }}
                  style={styles.radioButtonContainer}
                >
                  <View style={styles.radioButton}>
                    <Radio value="very bad" />
                    <Text>Very {'\n'}bad</Text>
                  </View>
                  <Radio value="bad" my={1} />
                  <Radio value="neutral" my={1} />
                  <Radio value="good" my={1} />
                  <View style={styles.radioButton}>
                    <Radio value="very good" />
                    <Text>Very {'\n'}good</Text>
                  </View>
                </Radio.Group>
                <FormControl isRequired style={styles.textAreaContainer}>
                  <FormControl.Label>
                    Feel free to tell us more
                  </FormControl.Label>
                  <TextArea
                    value={getTextareapValue(item.id)}
                    onChange={e => handleChangeTextarea(e, item)}
                    h={20}
                    placeholder="Anything you'd like us to know :) "
                    w={{
                      base: '100%',
                      md: '25%',
                    }}
                  />
                </FormControl>
                <Button onPress={onSubmit} mt="5" colorScheme="cyan">
                  Submit
                </Button>
              </VStack>
            )}
          />
        )}
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
  },
})

export default Questionnaire
