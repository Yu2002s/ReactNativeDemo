import React, { useState } from 'react'
import { Route, SceneMap, TabBar, TabView } from 'react-native-tab-view'
import { Image, Text, useWindowDimensions, View } from 'react-native'
import { Tab } from './Tab.tsx'

/**
 * 创建需要渲染的场景
 */
const renderScene = SceneMap({
  first: Tab,
  second: Tab,
})

/**
 * 路由列表
 */
const routes: Route[] = [
  {key: 'first', title: 'First', icon: '../../../assets/icon/home.png'},
  {key: 'second', title: 'Second', icon: '../../assets/icon/mine.png'},
]

/**
 * tab 选项卡视图
 * @constructor
 */
export default function TabViewComponent() {
  // 获取当前屏幕的尺寸信息
  const layout = useWindowDimensions()

  // 当前 tab 索引
  const [index, setIndex] = useState(0)

  // 使用方法渲染场景
  /* const renderScene = ({
     route,
     jumpTo,
   }: SceneRendererProps & {
     route: Route
   }) => {
     // 根据 route 的 key 属性渲染不同场景
     // 这里需要路由实现 shouldComponentUpdate(memo) 方法
     // 建议使用 SceneMap 方法进行场景渲染
     switch (route.key) {
       case 'first':
         return <Tab foo="bar" />
       case 'second':
         return <Tab />
     }
   }*/

  return (
    <TabView
      // 当索引发生变化时, 这是一个受控组件，需要使用 setIndex 进行更新索引
      onIndexChange={setIndex}
      // 导航状态数据，传入 index (当前索引), routes (路由列表)
      navigationState={{index, routes}}
      // 需要渲染的场景
      renderScene={renderScene}
      // 初始 layout (尺寸)，可以指定提高初始渲染性能
      initialLayout={{width: layout.width}}
      // 自定义 tabBar
      renderTabBar={props => (
        <TabBar
          // 指示器样式
          indicatorStyle={{backgroundColor: '#000'}}
          // 指示器颜色
          inactiveColor="#000"
          // 选择颜色
          activeColor="pink"
          // 按压颜色
          pressColor="#ccc"
          style={{backgroundColor: 'white'}}
          {...props}
          // 自定义 tabBarItem
          // renderTabBarItem=
          // 自定义选择器
          // renderIndicator={}
          // tab 点击事件
          /*onTabPress={({route, preventDefault}) => {
            if (route.key === 'second') {
              // 阻止默认事件
              preventDefault()
            }
          }}*/
          // 长按事件
          // onTabLongPress={}
          // 标签是否可滚动
          scrollEnabled={true}
          // 滚动选项卡栏是否弹起
          bounces={false}
          // tabBar 样式
          tabStyle={
            {
              /*width: 'auto'*/
            }
          }
          // 指示器容器样式
          indicatorContainerStyle={{}}
          // 选项卡内部容器样式
          contentContainerStyle={{}}
          // 选项卡之间的间距
          gap={10}
        />
      )}
      // tabBar 显示位置
      tabBarPosition="top"
      // 是否懒加载，默认为 false 如果不希望加载所有的路由，则可以指定懒加载
      lazy={({route}) => route.key === 'second'}
      // 开启所有懒加载
      // lazy
      // 自定义加载时间时候看到的内容
      renderLazyPlaceholder={() => <Text>loading...</Text>}
      // 当启用 lazy 懒加载时，此属性指定加载多少条相邻的路由
      lazyPreloadDistance={0}
      // 键盘是否因手势而关闭 auto: 索引更改时，键盘消失；on-drag：拖动时键盘消失；none: 不会关闭
      keyboardDismissMode="auto"
      // 是否启用手势滑动
      swipeEnabled={true}
      // 当手势开始滑动时调用
      onSwipeStart={() => console.log('onSwipeStart')}
      // 当手势滑动结束时调用
      onSwipeEnd={() => console.log('onSwipeEnd')}
      // overScroll 模式 'auto' | 'always' | 'never'
      overScrollMode="auto"
      // 所有路由的样式
      pagerStyle={{backgroundColor: 'pink'}}
      // tabView 的样式
      style={{}}
      // 所有选项卡的配置
      commonOptions={{
        // 配置 icon
        icon: ({route, focused, color}) => (
          <Image
            style={{width: 20, height: 20}}
            source={require('../../../assets/icon/home.png')}
            tintColor={color}
          />
        ),
        // label: () => ()
      }}
      // 特定选项卡的配置
      options={{
        first: {
          // 配置每个 tab 的 labelText 选项，用于显示在页面上，
          // 没有设置默认显示的 title 属性
          labelText: 'First Tab',
          // web 页面的路径
          href: '',
          // 自定义展示的 label
          label: ({route, color, labelText, focused, style}) => (
            <Text style={{ color, margin: 8}}>{labelText ?? route.title}</Text>
          ),
          // icon: ({route, focused, color}) => ()
          // 徽章 右上角展示的点
          badge: ({route}) => (
            <View
              style={{ backgroundColor: 'red', width: 20, height: 20, borderRadius: 10 }}
            />
          ),
          // 环绕每个屏幕的样式，可以覆盖一些默认的样式，例如，溢出裁剪
          sceneStyle: {
            overflow: 'hidden'
          }
        },
        second: {
          labelText: 'Second Tab',
        },
      }}
    />
  )
}
