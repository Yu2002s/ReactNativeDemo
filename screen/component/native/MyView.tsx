import React from 'react'
import {Text} from '@react-navigation/elements'
import {StyleSheet, View} from 'react-native'

/**
 * View: 1.支持设置触摸点击事件
 *       2.尽量使用 StyleSheet 创建样式管理
 * @returns JSX
 */
export default function MyView() {
  function onResponderMove(event: any) {
    console.log(event)
  }
  return (
    <View onResponderMove={onResponderMove} style={{flexDirection: 'row', height: 100, padding: 20}}>
      <View style={{backgroundColor: 'blue', flex: 0.3}}/>
      <View style={{backgroundColor: 'red', flex: 0.4}}/>
      <Text style={styles.titleStyle}>MyView</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 19,
    fontWeight: 'bold',
    padding: 10,
  },
})
