import {Text} from '@react-navigation/elements'
import {useNavigation} from '@react-navigation/native'
import React, {useCallback, useMemo, useState} from 'react'
import {
  SectionList,
  SectionListData,
  StyleSheet,
  TouchableHighlight,
} from 'react-native'
import {ComponentParamList} from '../../types/navigation'

type ItemProps = {
  name: string
  label: keyof ComponentParamList
}

const componentList: SectionListData<ItemProps>[] = [
  {
    title: '基础组件',
    data: [
      {
        name: 'View',
        label: 'MyView',
      },
      {
        name: 'Text',
        label: 'MyText',
      },
      {
        name: 'Image',
        label: 'MyImage',
      },
      {
        name: 'TextInput',
        label: 'MyTextInput',
      },
    ],
  },
  {
    title: '交互组件',
    data: [
      {
        name: 'Button',
        label: 'MyButton',
      },
      {
        name: 'Switch',
        label: 'MySwitch',
      },
    ],
  },
  {
    title: '列表视图',
    data: [
      {
        name: 'FlatList',
        label: 'MyFlatList',
      },
    ],
  },
  {
    title: 'Android特有',
    data: [
      {
        name: 'BackHandler',
        label: 'MyBackHandler',
      },
      {
        name: 'Permission',
        label: 'MyPermission',
      },
      {
        name: 'Toast',
        label: 'MyToast',
      },
    ],
  },
  {
    title: '其他',
    data: [
      {
        name: 'ActivityIndictor',
        label: 'MyActivityIndicator',
      },
      {
        name: 'Alert',
        label: 'MyAlert',
      },
      {
        name: 'Animated',
        label: 'MyAnimated',
      },
      {
        name: 'Dimensions',
        label: 'MyDimensions',
      },
      {
        name: 'KeyboardAvoidingView',
        label: 'MyKeyboardAvoidingView',
      },
      {
        name: 'Links',
        label: 'MyLinks',
      },
      {
        name: 'Modal',
        label: 'MyModal',
      },
      {
        name: 'RefreshControl',
        label: 'MyRefreshControl',
      },
      {
        name: 'StatusBar',
        label: 'MyStatusBar',
      },
    ],
  },
  {
    title: 'Navigation组件',
    data: [
      {
        name: 'NavigationComponents',
        label: 'MyNavigationComponents',
      },
    ],
  },
]

export default function ComponentList() {
  const navigation = useNavigation()
  const [selectedName, setSelectedName] = useState('')

  const handlePress = useCallback(
    ({name, label}: ItemProps) => {
      setSelectedName(name)
      navigation.navigate(label)
    },
    [navigation],
  )

  const getSelectedStyle = useMemo(
    () => (name: string) => ({
      backgroundColor: name === selectedName ? '#aaa' : '#fff',
    }),
    [selectedName],
  )

  const renderItem = useCallback(
    ({item}: {item: ItemProps}) => {
      return (
        <TouchableHighlight
          onPress={() => handlePress(item)}
          underlayColor="#f7f7f7"
          style={[styles.itemStyle, getSelectedStyle(item.name)]}>
          <Text style={styles.itemTextStyle}>{item.name}</Text>
        </TouchableHighlight>
      )
    },
    [handlePress, getSelectedStyle],
  )

  return (
    <SectionList
      sections={componentList}
      keyExtractor={(item, index) => item.label + index}
      renderItem={renderItem}
      renderSectionHeader={({section}) => (
        <Text style={styles.headerStyle}>{section.title}</Text>
      )}
    />
  )
}

const styles = StyleSheet.create({
  headerStyle: {
    padding: 10,
    fontSize: 17,
    fontWeight: 'bold',
  },
  itemStyle: {
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  itemTextStyle: {
    padding: 12,
  },
})
