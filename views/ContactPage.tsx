import React from 'react'
import { StyleSheet } from 'react-native'
import {
  Heading,
  Input,
  FormControl,
  VStack,
  TextArea,
  Button,
  Radio,
  View,
  CloseIcon
} from 'native-base'

import ThemeProvider from '../context/ThemeProvider'

const ContactPage = ({ navigation }) => {
  const [formData, setData] = React.useState({})
  const [value, setValue] = React.useState('one')

  return (
    <ThemeProvider>
      <VStack style={styles.viewWrapper}>
        <View style={styles.header}>
          <Heading>Contact assistance</Heading>
          <Button bg="transparent" onPress={() => navigation.navigate('CloseForm Modal')}
          ><CloseIcon size="4" /></Button>
        </View>
        <VStack width="90%" mx="3">
          <FormControl isRequired>
            <FormControl.Label _text={{ bold: true }}>Name</FormControl.Label>
            <Input
              placeholder="Enter your firstname and lastname"
              onChangeText={value => setData({ ...formData, name: value })}
            />
          </FormControl>
          <FormControl isRequired>
            <FormControl.Label _text={{ bold: true }}>Phone</FormControl.Label>
            <Input
              placeholder="Enter your phone number"
              onChangeText={value => setData({ ...formData, name: value })}
            />
          </FormControl>
          <FormControl isRequired>
            <FormControl.Label _text={{ bold: true }}>Email</FormControl.Label>
            <Input
              placeholder="Enter your email address"
              onChangeText={value => setData({ ...formData, name: value })}
            />
          </FormControl>
          <FormControl isRequired>
            <FormControl.Label _text={{ bold: true }}>Feel free to tell us more</FormControl.Label>
            <TextArea
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
            value={value}
            onChange={nextValue => {
              setValue(nextValue)
            }}
          >
            <Radio value="one" my={1}>
              By Phone
            </Radio>
            <Radio value="two" my={1}>
              By email
            </Radio>
          </Radio.Group>
          <Button style={styles.submitButton} bg="primary.600" onPress={() => navigation.navigate('FormSubmitted Modal')}>Submit</Button>
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
  }
})

export default ContactPage
