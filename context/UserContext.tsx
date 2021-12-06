import React, { useState } from 'react'
import uuid from 'react-native-uuid'

import { User } from '../types'


type UserContextType = {
  user: User
  setUser: ((value: any) => void) | null
}
const UserContext = React.createContext<UserContextType>({
  user: {
    name: '',
    phone: 0,
    email: '',
    detailed_info: '',
    contact_by: 'phone',
    docId: '',
    id: uuid.v4() as string,
  },
  setUser: null
})

const UserInforProvider = (props: any) => {
  const [user, setUser] = useState<any>({
    name: '',
    phone: '',
    email: '',
    detailed_info: '',
    contact_by: 'phone',
    docId: '',
    id: uuid.v4() as string,
  })
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  )
}

export { UserContext, UserInforProvider }
