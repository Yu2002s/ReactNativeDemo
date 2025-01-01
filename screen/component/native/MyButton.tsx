import * as React from 'react'
import {Button, View} from 'react-native'

export default function MyButton() {
  return (
    <View style={{padding: 10}}>
      <Button title="Normal Button" />

      <Button
        title="MyButton"
        color="#841584"
        accessibilityLabel="Learn more"
      />

      <Button title="Disabled Button" disabled />
    </View>
  )
}
