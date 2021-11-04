import React from 'react'
import {
  Heading,
  Input,
  FormControl,
  VStack,
  TextArea,
  Button,
  Radio,
} from 'native-base'

const ContactPage = () => {
  const [formData, setData] = React.useState({})
  const [value, setValue] = React.useState('one')

  return (
    <>
      <Heading size="xl">Contact assistance</Heading>
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
        <Button onPress={() => console.log('hello world')}>Submit</Button>
      </VStack>
    </>
  )
}

export default ContactPage
