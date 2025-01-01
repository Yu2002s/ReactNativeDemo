import {Text} from '@react-navigation/elements'
import * as React from 'react'
import {useState} from 'react'
import {StyleSheet, View} from 'react-native'

/**
 * Text: 1.View 中不能书写文本
 *       2.文本换行：View 组件内遵循 Flexable 默认不内联，而 Text 组件内则是内联的
 *       3.样式继承限制，只有在 Text 组件内部分样式才会继承，
 *         通常做法是写一个通用 Text 组件，并设置通用样式。
 * @returns Jsx
 */
export default function MyText() {
  const [titleText, setTitleText] = useState("Bird's Nest")
  const bodyText =
    'This is not really a bird nest. Hello world!!!! test test test test test'

  const onPressTitle = () => {
    setTitleText("Bird's Nest [pressed]")
  }
  return (
    <>
      <Text style={styles.baseText}>
        <Text style={styles.titleText} onPress={onPressTitle}>
          {titleText}
          {'\n'}
          {'\n'}
        </Text>
        <Text numberOfLines={1} ellipsizeMode="tail">
          {bodyText}
        </Text>
        <Text>First part and </Text>
        <Text>second part</Text>
      </Text>
      <View>
        <Text>First part and </Text>
        <Text>second part</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})
