import React from 'react'
import { View } from 'native-base'
import { LineChart, Grid } from 'react-native-svg-charts'

const PersonalPage = () => {
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
  return (
    <View>
      <LineChart
        style={{ height: 200 }}
        data={data}
        svg={{ stroke: '#14479f' }}
        contentInset={{ top: 20, bottom: 20 }}
      >
        <Grid />
      </LineChart>
    </View>
  )
}

export default PersonalPage
