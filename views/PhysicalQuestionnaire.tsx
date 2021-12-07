import React, { useEffect, useState } from 'react'
import { GestureResponderEvent, StyleSheet, FlatList, SafeAreaView } from 'react-native'
import {
  Button,
  FormControl,
  Heading,
  Radio,
  Spinner,
  Text,
  TextArea,
  View,
  ScrollView,
} from 'native-base'

import ThemeProvider from '../context/ThemeProvider'
import { db } from '../environment/config'
import { Question, Answer } from '../types'

const PhysicalQuestionnaire = ({ navigation }: any) => {
  const [questions, setQuestions] = useState<any | Question[]>([])
  const [submitValues, setSubmitValues] = useState<any | Answer[]>([])

  /**
   * Fetch data (collection: questions) from Firestore
   */
  const fetchQuestions = async () => {
    const response = db.collection('physical-questions')
    const data = await response.get()
    const duplicateSubmitValues = [...submitValues]
    const duplicateQuestions = [...questions]
    data.docs.forEach(item => {
      let question = item.data()
      question = { ...question, id: item.id }
      const transformedQuestion = { ...question, additionalInfo: "", answer: "very good" }
      duplicateQuestions.push(question)
      duplicateSubmitValues.push(transformedQuestion)
    })
    setQuestions(duplicateQuestions)
    setSubmitValues(duplicateSubmitValues)
  }

  const onSubmit = (event: GestureResponderEvent) => {
    event.preventDefault()
    db.collection('physical-surveys')
      .add({ data: [...submitValues], submitTime: new Date(Date.now()) })
      .then(docRef => {
        console.log('submit success')
        navigation.navigate('Questionnaire Submitted Modal')
      })
      .catch(error => {
        console.error('Error adding document: ', error)
      })
  }

  const handleChangeTextarea = (text: string, question: Question) => {
    let updatedVal = submitValues.find((val: Answer) => val.id === question.id)
    if (updatedVal) {
      updatedVal = { ...updatedVal, additionalInfo: text }
      setSubmitValues(submitValues.map((value: any) => value.id === question.id ? updatedVal : value))
    } else {
      setSubmitValues([
        ...submitValues,
        {
          id: question.id,
          question: question.question,
          weight: question.weight,
          answer: 'Very good',
          additionalInfo: text,
        },
      ])
    }
  }

  const getTextareaValue = (id: string) => {
    const updatedVal = submitValues.find((val: Answer) => val.id === id)
    if (updatedVal) {
      return updatedVal?.additionalInfo
    }
    return ''
  }

  const getRadioGroupValue = (id: string) => {
    const updatedVal = submitValues.find((val: Answer) => val.id === id)
    if (updatedVal) {
      return updatedVal?.answer
    }
    return 'very good'
  }

  const handleChangeRadioGroup = (value: string, question: Question) => {
    let updatedVal = submitValues.find((val: Answer) => val.id === question.id)
    if (updatedVal) {
      updatedVal = { ...updatedVal, answer: value }
      setSubmitValues(submitValues.map((value: Question) => value.id === question.id ? updatedVal : value))
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
      <SafeAreaView style={styles.viewWrapper}>
        {questions.length !== 0 ? (
          <View style={styles.container}>
            <FlatList
              data={questions}
              renderItem={({ item }) => (
                <ScrollView width="90%" mx="3" mb="10">
                  <Heading>{item.question}</Heading>
                  <Radio.Group
                    defaultValue="very good"
                    name="questionnaireGroup"
                    accessibilityLabel="questionnaire group"
                    value={getRadioGroupValue(item.id)}
                    onChange={nextValue => {
                      handleChangeRadioGroup(nextValue, item)
                    }}
                    style={styles.radioButtonContainer}
                  >
                    <View style={styles.radioButton}>
                      <Radio value="very bad" accessibilityLabel="very bad" />
                      <Text>Very {'\n'}bad</Text>
                    </View>
                    <Radio value="bad" accessibilityLabel="bad" my={1} />
                    <Radio
                      value="neutral"
                      accessibilityLabel="neutral"
                      my={1}
                    />
                    <Radio value="good" accessibilityLabel="good" my={1} />
                    <View style={styles.radioButton}>
                      <Radio value="very good" accessibilityLabel="very good" />
                      <Text>Very {'\n'}good</Text>
                    </View>
                  </Radio.Group>
                  <FormControl isRequired style={styles.textAreaContainer}>
                    <FormControl.Label>
                      Feel free to tell us more
                    </FormControl.Label>
                    <TextArea
                      value={getTextareaValue(item.id)}
                      onChangeText={text => handleChangeTextarea(text, item)}
                      h={20}
                      placeholder="Anything you'd like us to know :) "
                      w={{
                        base: '100%',
                        md: '25%',
                      }}
                    />
                  </FormControl>
                </ScrollView>
              )}
              keyExtractor={item => item.id}
            />
            <Button onPress={onSubmit} mt="5" style={styles.submitButton}>
              Submit
            </Button>
          </View>
        ) : (
          <Spinner color="rgba(18, 65, 145, 1)" />
        )}
      </SafeAreaView>
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  viewWrapper: {
    height: '100%',
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  container: {
    marginTop: 50,
    marginBottom: 50,
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
  submitButton: {
    backgroundColor: 'rgba(18, 65, 145, 1)',
    width: 'auto',
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
})

export default PhysicalQuestionnaire
