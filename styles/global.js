import { StyleSheet } from 'react-native'

const globalStyles = StyleSheet.create({
  heading: {
    marginHorizontal: 14,
    marginVertical: 20,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 30,
  },
  button: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 15,
    marginHorizontal: 14,
    marginVertical: 8,
    backgroundColor: 'rgba(18, 65, 145, 1)',
    justifyContent: 'flex-start',
  },
  mainBtnText: {
    fontSize: 20,
    color: 'white',
  },
  mainBtnTextSmall: {
    fontSize: 15,
    color: 'rgba(212, 223, 234, 1)',
  },
})

export default globalStyles
