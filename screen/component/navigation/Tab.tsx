import { Button, Text, View } from 'react-native'
import React from 'react'
import { Route, SceneRendererProps } from 'react-native-tab-view';
import { useNavigation } from '@react-navigation/core';

/**
 * Tab 路由组件，TabView 展示的路由组件
 * 如果使用 SceneMap 创建的场景
 * 这里将接收 route、jumpTo、position 三个参数
 *
 * @param route 路由信息 {key: 唯一标识, title: 标题, icon: 图标}
 * @param jumpTo 切换路由方法（只能跳转 tabView 路由列表中的路由）
 *        要使用 navigation.navigate 方法跳转路由，
 *        请使用@react-navigation/material-top-tabs
 *        这个库进一步对 tabView 进行了封装
 * @param position 当前位置的动画节点
 * @constructor
 */
export const Tab = ({route, jumpTo, position}: {
  route: Route;
} & Omit<SceneRendererProps, 'layout'>) => {
  const navigation = useNavigation()
  return (
    <View>
      <Text>Hello World {route.key} {route.title} {position.hasListeners()}</Text>
      <Button title="Go Second" onPress={() => jumpTo('second')} />
      <Button title="Test" onPress={() => navigation.navigate('Login')} />
    </View>
  )
}
