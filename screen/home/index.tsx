/*
import {View} from 'react-native'
import React, {useState} from 'react'
import {useTheme} from '@react-navigation/native'
import {Text, Button} from '@react-navigation/elements'
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export default function HomeScreen({
  route,
  navigation,
}: BottomTabScreenProps<'Home'>) {
  const theme = useTheme()
  const [count, setCount] = useState(0)
  return (
    <View>
      <Text
        style={{color: theme.colors.text}}
        onPress={() => navigation.jumpTo('Mine', {content: 'Hello'})}>
        Hello World: {route.params?.post}
      </Text>
      <Text>count: {count}</Text>
      <Button onPress={() => setCount(c => c + 1)}>+1</Button>
      <Button pressOpacity={0} screen="Login">
        Navigate to Login
      </Button>

      <Button onPress={() => navigation.navigate('Component')}>
        Component列表
      </Button>
    </View>
  )
}
*/
