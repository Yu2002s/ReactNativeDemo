import React from 'react'
import {Button, ToastAndroid, View} from 'react-native'

export default function MyToast() {
  const showToast = () => {
    ToastAndroid.show('我是 Toast ', ToastAndroid.LONG)
  }

  const showGravityToast = () => {
    ToastAndroid.showWithGravity(
      '我是自定义位置 Toast',
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
    )
  }

  return (
    <View style={{padding: 20}}>
      <Button title="显示普通Toast" onPress={showToast} />
      <Button title="显示中间Toast" onPress={showGravityToast} />
    </View>
  )
}
