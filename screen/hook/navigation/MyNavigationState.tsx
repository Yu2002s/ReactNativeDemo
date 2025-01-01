import { View } from 'react-native'
import React from 'react'
import { useNavigationState, useRoute } from '@react-navigation/native'
import { Text } from '@react-navigation/elements'

/**
 * 获取当前路由是否是第一个路由
 */
function useFirstRouteInParent() {
  const route = useRoute()
  const isFirstRouteInParent = useNavigationState(
    state => state.routes[0].key === route.key,
  )
  return isFirstRouteInParent
}

/**
 * 获取上一个路由名称
 */
function usePreviousRouteName() {
  return useNavigationState(state =>
    state.routes[state.index - 1]?.name
      ? state.routes[state.index - 1]?.name
      : 'None',
  )
}

export const MyNavigationState = () => {
  const navigationState = useNavigationState(state => state)

  const isFirstRouteInParent = useFirstRouteInParent()

  const prevRouteName = usePreviousRouteName()

  return (
    <View style={{padding: 20}}>
      <Text>navigationIndex: {navigationState.index}</Text>
      <Text>
        isFirstRouteInParent: {isFirstRouteInParent ? 'true' : 'false'}
      </Text>
      <Text>prevRouteName: {prevRouteName}</Text>
    </View>
  )
}
