import {Text} from '@react-navigation/elements'
import React, {useCallback, useState} from 'react'
import {RefreshControl, ScrollView} from 'react-native'

export default function MyRefreshControl() {
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
    }, 2000)
  }, [])

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <Text>Pull Down to refresh.</Text>
    </ScrollView>
  )
}
