import React from 'react'
import { Button, Heading } from 'native-base'

const CloseForm = () => {
  return (
    <>
      <Heading size="xl">Contact assistance</Heading>
      <Button onPress={() => console.log("hello world")}>Yes</Button>
      <Button onPress={() => console.log("hello world")}>No</Button>
    </>
  )
}

export default CloseForm
