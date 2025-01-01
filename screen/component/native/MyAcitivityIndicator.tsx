import React from 'react'
import {ActivityIndicator, View} from 'react-native'

export default function MyAcitivityIndicator() {
  return (
    <View style={{padding: 20, flex: 1, flexDirection: 'row'}}>
      <ActivityIndicator />
      <ActivityIndicator size="small" color="#303030" />
      <ActivityIndicator size="large" color="#ff0000" />
      {/* animating: false 隐藏 */}
      <ActivityIndicator animating={false} />
    </View>
  )
}
