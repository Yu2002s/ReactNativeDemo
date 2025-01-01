import {Text} from '@react-navigation/elements'
import React, {useEffect, useState} from 'react'
import {Dimensions, View} from 'react-native'

export default function MyDimensions() {
  // 获取 window 的屏幕尺寸信息
  const windowDimensions = Dimensions.get('window')
  // 获取屏幕的尺寸信息
  const screenDimensions = Dimensions.get('screen')

  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
    screen: screenDimensions,
  })

  // 直接获取尺寸信息
  const windowWidth = Dimensions.get('window').width
  const windowHeight = Dimensions.get('window').height

  useEffect(() => {
    // 监听尺寸大小改变
    const unsubscribe = Dimensions.addEventListener(
      'change',
      ({window, screen}) => {
        setDimensions({window, screen})
      },
    )
    return () => unsubscribe.remove()
  }, [])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}>
      <Text>WindowWidth: {windowWidth}</Text>
      <Text>WindowHeight: {windowHeight}</Text>

      <View
        style={{marginTop: 20, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 19, fontWeight: 'bold'}}>windowDimensions</Text>
        {Object.entries(dimensions.window).map(([key, value]) => (
          <Text key={key}>
            {key} - {value}
          </Text>
        ))}
      </View>

      <View
        style={{marginTop: 20, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 19, fontWeight: 'bold'}}>ScreenDimensions</Text>
        {Object.entries(dimensions.screen).map(([key, value]) => (
          <Text key={key}>
            {key} - {value}
          </Text>
        ))}
      </View>
    </View>
  )
}
