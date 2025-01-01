import {useWindowDimensions, View} from 'react-native'
import React from 'react'
import {Text} from '@react-navigation/elements'

export default function MyWindowDimensions() {
  // 这里获取的宽高是动态的
  const windowDimensions = useWindowDimensions()

  return (
    <View>
      <View>
        <Text>WindowWidth: {windowDimensions.width}</Text>
        <Text>WindowHeight: {windowDimensions.height}</Text>
      </View>
    </View>
  )
}
