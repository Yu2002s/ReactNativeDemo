import React from 'react'
import {Button, View} from 'react-native'
import {
  RootStackNavigationProp,
  RootStackScreenProps,
} from '../../../types/navigation.tsx'
import {Text} from '@react-navigation/elements'
import {useNavigation} from '@react-navigation/core'

export function MyNavigation({
  navigation: nav,
  route,
}: RootStackScreenProps<'MyNavigation'>) {
  // 获取到导航对象，如果未指定 ReactNavigation 类型，则这里需要手动指定泛型为 RootParmaList
  /*const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()*/
  const navigation = useNavigation<RootStackNavigationProp<'MyNavigation'>>()

  // const navigation2 = useNavigation()

  return (
    <View style={{padding: 20}}>
      <Text>route: {route.name}</Text>
      <Button title="Back" onPress={() => navigation.goBack()} />
      <Button title="Go Login" onPress={() => navigation.navigate('Login')} />
      <Button title="Go Home" onPress={() => navigation.replace('Login')} />
      <Button title="Go Home" onPress={() => nav.pop(2)} />
    </View>
  )
}
