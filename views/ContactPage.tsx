import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import uuid from 'react-native-uuid'
import {
  Heading,
  Input,
  FormControl,
  VStack,
  TextArea,
  Button,
  Radio,
  View,
  CloseIcon,
} from 'native-base'

import { db } from '../environment/config'
import ThemeProvider from '../context/ThemeProvider'

const ContactPage = ({ navigation }: any) => {
  const [value, setValue] = useState('phone')
  const [formData, setData] = useState<any>({
    name: '',
    phone: '',
    email: '',
    detailed_info: '',
    contact_by: value,
    id: uuid.v4() as string,
  })

  useEffect(() => {
    fetchUser()
  }, [formData.id])

  /**
   * Fetch data (collection: users) from Firestore
   */
  const fetchUser = async () => {
    const userId = await AsyncStorage.getItem('userId')
    const response = db.collection('users')
    const data = await response.get()
    data.docs.forEach(item => {
      const user = item.data()
      if (user.id === userId) {
        setData(user)
      }
    })
  }

  const onSubmit = async (e: any) => {
    e.preventDefault()
    await AsyncStorage.setItem('userId', formData.id)
    db.collection('users')
      .add(formData)
      .then((docRef: any) => {
        console.log('submit success')
      })
      .catch((error: any) => {
        console.error('Error adding document: ', error)
      })
  }

  return (
    <ThemeProvider>
      <VStack style={styles.viewWrapper}>
        <View style={styles.header}>
          <Heading>Contact assistance</Heading>
          <Button
            bg="transparent"
            onPress={() => navigation.navigate('CloseForm Modal')}
          >
            <CloseIcon size="4" />
          </Button>
        </View>
        <VStack width="90%" mx="3">
          <FormControl isRequired>
            <FormControl.Label _text={{ bold: true }}>Name</FormControl.Label>
            <Input
              placeholder="Enter your firstname and lastname"
              onChangeText={value => setData({ ...formData, name: value })}
              value={formData.name}
            />
          </FormControl>
          <FormControl isRequired>
            <FormControl.Label _text={{ bold: true }}>Phone</FormControl.Label>
            <Input
              placeholder="Enter your phone number"
              onChangeText={value => setData({ ...formData, phone: value })}
              value={formData.phone}
            />
          </FormControl>
          <FormControl isRequired>
            <FormControl.Label _text={{ bold: true }}>Email</FormControl.Label>
            <Input
              placeholder="Enter your email address"
              onChangeText={value => setData({ ...formData, email: value })}
              value={formData.email}
            />
          </FormControl>
          <FormControl isRequired>
            <FormControl.Label _text={{ bold: true }}>
              Feel free to tell us more
            </FormControl.Label>
            <TextArea
              onChange={(e: any) =>
                setData({ ...formData, detailed_info: e.currentTarget.value })
              }
              value={formData.detailed_info}
              h={20}
              placeholder="How are you doing?"
              w={{
                base: '70%',
                md: '25%',
              }}
            />
          </FormControl>
          <Radio.Group
            name="myRadioGroup"
            accessibilityLabel="favorite number"
            onChange={nextValue => {
              setValue(value)
              setData({ ...formData, contact_by: nextValue })
            }}
            value={formData.contact_by}
          >
            <Radio value="phone" my={1}>
              By Phone
            </Radio>
            <Radio value="email" my={1}>
              By email
            </Radio>
          </Radio.Group>
          <Button
            style={styles.submitButton}
            bg="primary.600"
            onPress={onSubmit}
          >
            Submit
          </Button>
        </VStack>
      </VStack>
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
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  submitButton: {
    width: 150,
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 15,
  },
})

export default ContactPage
