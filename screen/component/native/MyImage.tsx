import {Text} from '@react-navigation/elements'
import * as React from 'react'
import {Image, ImageBackground, ScrollView, StyleSheet} from 'react-native'

export default function MyImage() {
  return (
    <ScrollView>
      <Text style={styles.titleText}>本地图片</Text>
      <Image
        style={styles.img}
        source={require('../../../assets/icon/home.png')}
      />
      <Text style={styles.titleText}>网络图片</Text>
      <Image
        style={styles.img}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Text style={styles.titleText}>Base64</Text>
      <Image
        style={{width: 100, height: 100}}
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
      />
      <Text style={styles.titleText}>加载Android Drawable图片</Text>
      <Image
        source={{uri: 'image_loading'}}
        style={{width: 100, height: 100}}
      />
      <Text style={styles.titleText}>加载Android Assets图片</Text>
      <Image
        source={{uri: 'asset:/danmaku_close.png'}}
        style={{width: 100, height: 100}}
      />
      <Text style={styles.titleText}>请求方式加载网络图片</Text>
      <Image
        source={{
          uri: 'https://facebook.github.io/react/logo-og.png',
          method: 'POST',
          headers: {
            Pragma: 'no-cache',
          },
          body: 'Your Body goes here',
        }}
        style={{width: 400, height: 400}}
      />
      <Text style={styles.titleText}>图片背景</Text>
      <ImageBackground
        source={require('../../../assets/icon/mine.png')}
        style={{width: 100, height: 100}}>
        <Text>Hello World!</Text>
      </ImageBackground>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  img: {
    width: 50,
    height: 100,
    // 拉伸
    resizeMode: 'stretch',
  },
})
