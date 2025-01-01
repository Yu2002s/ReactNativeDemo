import { usePreventRemove } from '@react-navigation/native'
import { Alert, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { Button } from '@react-navigation/elements'
import React from 'react';

/**
 * 使用场景，当有未保存的内容时，显示提示框提示用户
 * @constructor
 */
export const MyPreventRemove = () => {
  const navigation = useNavigation()
  // true 表示拦截
  usePreventRemove(true, ({data}) => {
    Alert.alert('确认要退出这个屏幕?', '你想要退出嘛', [
      {
        text: '退出',
        onPress: () => navigation.dispatch(data.action),
      },
      {
        text: '取消',
        style: 'cancel',
      },
    ])
  })
  return (
    <View style={{padding: 20}}>
      <Button onPress={() => navigation.navigate('Login')}>Login</Button>
    </View>
  )
}
