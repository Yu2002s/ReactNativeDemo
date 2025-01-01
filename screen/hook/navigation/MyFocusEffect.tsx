import {Button, View} from 'react-native'
import {useFocusEffect} from '@react-navigation/native'
import React, {useCallback, useState} from 'react'
import {useNavigation} from '@react-navigation/core'
import {Text} from '@react-navigation/elements'

export function MyFocusEffect() {
  const navigation = useNavigation()
  const [userId, setUserId] = useState<string | null>('Jack')
  const [user, setUser] = useState<{name: string} | null>(null)

  useFocusEffect(
    // 使用 useCallback 保证只执行一次，
    // 只有 useCallback 依赖项改变时才会进行重新聚焦，
    // 数据依赖改变时执行顺序: unFocused callback -> focused callback
    useCallback(() => {
      console.log('focused callback')
      let active = true

      async function fetchUser() {
        const result: {name: string} = await new Promise(resolve => {
          setTimeout(() => {
            resolve({name: 'Hello:' + userId})
          }, 3000)
        })
        // 在进行异步请求数据的时候
        // 只有在屏幕有焦点时才更新状态
        if (active) {
          setUser(result)
        }
      }

      fetchUser()
      // 当屏幕聚焦时候
      return () => {
        // 当屏幕失焦的时候取消请求
        active = false
        // 当屏幕失焦的时候
        console.log('unFocused callback')
      }
    }, [userId]), // 记录依赖，当依赖改变的时候重新执行
  )

  // 如果不使用 callBack 则会在屏幕状态更新时重新聚焦
  useFocusEffect(() => {
    console.log('FocusEffect: focused')
    return () => {
      console.log('FocusEffect: unFocused')
    }
  })

  /*useEffect(() => {
    console.log('useEffect')
    return () => {
      console.log('useEffect Clean')
    }
  }, [userId])*/

  return (
    <View style={{padding: 20}}>
      {user && <Text>user: {user.name}</Text>}
      <Button title="Change User" onPress={() => setUserId('Tom')} />
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </View>
  )
}
