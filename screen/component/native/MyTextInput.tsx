import {Text} from '@react-navigation/elements'
import React, {useState} from 'react'
import {ScrollView, StyleSheet, TextInput} from 'react-native'

export default function MyTextInput() {
  const [text, setText] = useState('')
  return (
    <ScrollView>
      <Text>普通输入框</Text>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="请输入内容"
        keyboardType="visible-password"
        cursorColor="skyblue"
      />
      <Text>多行输入框</Text>
      {/* 
        editable: 是否可编辑
        multiline: 是否多行
        numberOfLines: 行数
        maxLength: 字数限制
        keyboardType: 输入键盘类型
        inputMode: 输入法输入类型
      */}
      <TextInput
        style={{padding: 10}}
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        keyboardType="default"
        inputMode="search"
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
  },
})
