import {useNavigation} from '@react-navigation/core'
import {Text} from '@react-navigation/elements'
import React, {useCallback} from 'react'
import {FlatList, TouchableHighlight} from 'react-native'
import {HookParamList} from '../../types/navigation'
import {useIsFocused} from '@react-navigation/native'

type ItemProps = {name: string; label: keyof HookParamList}

const DATA: Array<ItemProps> = [
  {
    name: 'Callback',
    label: 'MyCallback',
  },
  {
    name: 'WindowDimensions',
    label: 'MyWindowDimensions',
  },
  {
    name: 'Memo',
    label: 'MyMemo',
  },
  {
    name: 'Navigation',
    label: 'MyNavigation',
  },
  {
    name: 'NavigationState',
    label: 'MyNavigationState',
  },
  {
    name: 'FocusEffect',
    label: 'MyFocusEffect',
  },
  {
    name: 'PreventRemove',
    label: 'MyPreventRemove',
  }
]

const Item = ({item, onPress}: {item: ItemProps; onPress: () => void}) => {
  return (
    <TouchableHighlight
      underlayColor="#eee"
      style={{
        padding: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        backgroundColor: '#fff',
      }}
      onPress={onPress}>
      <Text>{item.name}</Text>
    </TouchableHighlight>
  )
}

export default function MyHook() {
  const navigation = useNavigation()
  // 获取屏幕是否聚焦
  const isFocused = useIsFocused()

  const handlePress = useCallback(
    (label: keyof HookParamList) => {
      return () => navigation.navigate(label)
    },
    [navigation],
  )

  function renderItem({item}: {item: ItemProps}) {
    return <Item item={item} onPress={handlePress(item.label)} />
  }

  return (
    <>
      <Text>FocusState: {isFocused ? 'true' : 'false'}</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={({name}) => name}
      />
    </>
  )
}
