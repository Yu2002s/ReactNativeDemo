import React from 'react'
import {Alert, Button, View} from 'react-native'

export default function MyAlert() {
  const showAlert = () => {
    Alert.alert('提示', '这是一个对话框', [
      {
        text: '取消',
        onPress: () => console.log('Cancel.'),
        style: 'cancel',
      },
      {
        text: '确认',
        onPress: () => console.log('Confirm'),
        style: 'default',
      },
    ])
  }

  const showAlert2 = () => {
    Alert.alert(
      '提示',
      '这是对话框2',
      [
        {
          text: '取消',
          style: 'cancel',
        },
        {
          text: '确认',
        },
        {
          text: 'Test',
          style: 'destructive',
        },
      ],
      {
        // 无法通过返回按钮和点击按钮外部关闭对话框
        cancelable: false,
        onDismiss: () => console.log('Dialog Dismiss.'),
        userInterfaceStyle: 'unspecified',
      },
    )
  }

  return (
    <View style={{padding: 20}}>
      <Button onPress={showAlert} title="显示对话框" />
      <Button onPress={showAlert2} title="显示对话框2" />
    </View>
  )
}
