import {Text} from '@react-navigation/elements'
import React, {useState} from 'react'
import {Button, StatusBar, StatusBarStyle, StyleSheet, View} from 'react-native'

export default function MyStatusBar() {
  const styleTypes: Array<StatusBarStyle> = [
    'default',
    'dark-content',
    'light-content',
  ]
  const [visibleStatisBar, setVisibleStatusBar] = useState(false)
  const [styleStatusBar, setStyleStatusBar] = useState(styleTypes[0])

  const changeVisiblityStatusBar = () => {
    setVisibleStatusBar(!visibleStatisBar)
  }

  const changeStyleStatusBar = () => {
    const styleId = styleTypes.indexOf(styleStatusBar) + 1
    if (styleId === styleTypes.length) {
      return setStyleStatusBar(styleTypes[0])
    }
    return setStyleStatusBar(styleTypes[styleId])
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textStyle}>StatusBar Style: {styleStatusBar}</Text>
        <Text style={styles.textStyle}>
          StatusBar Visibility: {!visibleStatisBar ? 'Visible' : 'Hidden'}
        </Text>
      </View>
      <StatusBar backgroundColor="blue" barStyle={styleStatusBar} />
      <View>
        <StatusBar hidden={visibleStatisBar} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Toggle StatusBar"
          onPress={() => changeVisiblityStatusBar()}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Change StatusBar Style"
          onPress={() => changeStyleStatusBar()}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  buttonContainer: {
    padding: 10,
  },
  textStyle: {
    textAlign: 'center',
  },
});
