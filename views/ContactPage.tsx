import React from 'react'
import { StyleSheet } from 'react-native';
import {
  Heading,
  Input,
  FormControl,
  VStack,
  TextArea,
  Button,
  Radio,
  View
} from 'native-base'

const ContactPage = ({ navigation }) => {
  const [formData, setData] = React.useState({})
  const [value, setValue] = React.useState('one')

  return (
    <>
      <View style={styles.header}>
        <Heading>Contact assistance</Heading>
        <Button onPress={() => navigation.navigate('CloseForm Modal')}
        >X</Button>
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
        <Button onPress={() => navigation.navigate('Notifications')}>Submit</Button>
      </VStack>
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

})

export default ContactPage
