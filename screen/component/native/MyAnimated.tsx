import {Text} from '@react-navigation/elements'
import React, {useRef} from 'react'
import {Animated, Button, View} from 'react-native'

export default function MyAnimated() {
  const fadeAnim = useRef(new Animated.Value(0)).current

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      // 使用原生驱动
      useNativeDriver: true,
    }).start()
  }

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start()
  }

  return (
    <View
      style={{
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Animated.View
        style={{padding: 20, backgroundColor: 'skyblue', opacity: fadeAnim}}>
        <Text>Fading View</Text>
      </Animated.View>
      <View
        style={{
          flexBasis: 100,
          justifyContent: 'space-evenly',
          marginVertical: 16,
        }}>
        <Button onPress={fadeIn} title="Fade in View" />
        <Button onPress={fadeOut} title="Fade out View" />
      </View>
    </View>
  )
}
