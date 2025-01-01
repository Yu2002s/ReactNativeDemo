import {Text} from '@react-navigation/elements'
import React, {useEffect} from 'react'
import {Alert, BackHandler, View} from 'react-native'

/**
 * Android 特有 API监听手机的返回事件
 * @returns JSX
 */
export default function MyBackHandler() {
  useEffect(() => {
    const backAction = () => {
      Alert.alert('exit App?', 'confirm Exit App?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: 'Confirm',
          onPress: () => BackHandler.exitApp(),
        },
      ])
      // 返回 true 会阻止默认的事件冒泡传递，进而阻止返回
      return true
    }
    // 监听返回事件
    BackHandler.addEventListener('hardwareBackPress', backAction)
    // clean 函数中进行移除操作
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backAction)
    }
  }, [])
  return (
    <View>
      <Text>BackHandler</Text>
    </View>
  )
}
