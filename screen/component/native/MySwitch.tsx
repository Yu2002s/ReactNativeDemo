import * as React from 'react'
import {useState} from 'react'
import {Switch, View} from 'react-native'

export default function MySwitch() {
  const [value, setValue] = useState(false)
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Switch
        value={value}
        /* 回调事件 */
        onChange={() => {
          console.log('value is changed')
        }}
        onValueChange={setValue}
        /* trackColor: 组件启用和关闭的背景颜色 */
        trackColor={{false: 'red', true: 'skyblue'}}
        thumbColor={value ? 'white' : 'black'}
        ios_backgroundColor="#fff"
      />
    </View>
  )
}
