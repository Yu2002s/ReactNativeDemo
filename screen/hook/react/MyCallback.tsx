import {View} from 'react-native'
import React, {useCallback, useState} from 'react'
import {Text} from '@react-navigation/elements'

export default function MyCallback() {
  const [count, setCount] = useState(0)

  const fn = useCallback(() => {
    console.log('这个方法会进入缓存，只会创建一次')
  }, [])

  const fn2 = useCallback(() => {
    console.log(
      '只有 count 发生改变时，这里的 fn2 才会重新创建，否则会进行缓存',
    )
    setCount(count + 1)
    setCount(count + 1)
  }, [count])

  return (
    <View>
      <Text onPress={fn2}>count: {count}</Text>
      <Text onPress={fn}>MyCallback</Text>
    </View>
  )
}
