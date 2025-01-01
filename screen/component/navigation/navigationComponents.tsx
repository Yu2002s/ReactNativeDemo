import {
  Button,
  Header,
  HeaderBackButton,
  HeaderBackContext,
  HeaderBackground,
  HeaderButton,
  HeaderHeightContext,
  HeaderShownContext,
  HeaderTitle,
  Label,
  MissingIcon,
  PlatformPressable,
  Text,
  useHeaderHeight,
} from '@react-navigation/elements'
import React from 'react'
import {Image} from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import {CommonActions, StackActions, useLinkTo} from '@react-navigation/native'
import {useNavigation} from '@react-navigation/core'

export function NavigationComponents() {
  // 获取最近的 header 高度
  const headerHeight = useHeaderHeight()
  // const defaultHeaderHeight = getDefaultHeaderHeight()

  // 获取屏幕的安全区域
  const safeAreaInsets = useSafeAreaInsets()

  // 使用 linkTo 钩子
  const linkTo = useLinkTo()

  /*const linkProps = useLinkProps({
    screen: 'Login',
    // params: {},
    href: '',
    action: StackActions.push('Login'),
  })*/

  const navigation = useNavigation()

  return (
    <>
      <Header
        // 标题
        title="My Header"
        // 头部标题，返回一个组件
        headerTitle={({tintColor, children}) => (
          /*<Text style={{color: tintColor, fontSize: 20}}>{children}</Text>*/
          <HeaderTitle tintColor={tintColor}>{children}</HeaderTitle>
        )}
        // 头部标题对齐
        headerTitleAlign="left"
        // 左边按钮
        headerLeft={props => <HeaderBackButton {...props} />}
        // 右边按钮
        headerRight={props => (
          <HeaderButton {...props}>
            <Image
              style={{width: 20, height: 20, tintColor: props.tintColor}}
              source={require('../../../assets/icon/home.png')}
            />
          </HeaderButton>
        )}
        // 搜索栏配置
        headerSearchBarOptions={{
          placeholder: '请输入',
          autoFocus: true,
          onChangeText: text => {
            console.log(text)
          },
        }}
        // 标题栏样式
        headerStyle={{
          backgroundColor: 'skyblue',
        }}
        // 底部阴影
        headerShadowVisible={false}
        // 标题样式
        headerTitleStyle={{
          fontSize: 20,
        }}
        // 左边按钮容器样式
        headerLeftContainerStyle={{
          paddingHorizontal: 10,
        }}
        // 右边按钮容器样式
        headerRightContainerStyle={{
          paddingHorizontal: 10,
        }}
        // 标题容器样式
        headerTitleContainerStyle={{
          paddingHorizontal: 0,
        }}
        // 标题文字图标着色
        headerTintColor="white"
        // 按钮按下颜色
        headerPressColor="red"
        // 按钮按下透明度
        headerPressOpacity={0.5}
        // 标题是否背景透明
        headerTransparent={false}
        // 状态栏高度
        headerStatusBarHeight={0}
        // 标题背景 可以用来做模糊效果
        headerBackground={props => <HeaderBackground {...props} />}></Header>
      <Text>HeaderHeight: {headerHeight}</Text>
      {/* 渲染缺失的图标 */}
      <MissingIcon size={30} />

      {/* 按下效果，类似于按钮，按钮时对此组件进一步的封装 */}
      <PlatformPressable pressColor="red">
        <Text>Hello World</Text>
      </PlatformPressable>

      {/* 自带导航的按钮，对原生按钮的进一步封装 */}
      <Button screen="Login">Login</Button>

      {/* 支持设置 tingColor 功能的文本 */}
      <Label tintColor="red">Hello World</Label>

      {/* 获取顶部的安全区域 */}
      <Text>safeAreaInsetTop: {safeAreaInsets.top}</Text>
      {/* 获取底部的安全区域 */}
      <Text>sageAreaInsetBottom: {safeAreaInsets.bottom}</Text>

      {/* SafeAreaProvider 组件的封装 */}
      {/*<SafeAreaProviderCompat>
        <Text>SafeAreaProviderCompat</Text>
      </SafeAreaProviderCompat>*/}

      <Button screen="MyTabView">Go TabViewComponent</Button>

      {/* 获取上一个屏幕的一些信息 */}
      <HeaderBackContext.Consumer>
        {headerBack => headerBack && <Text>{headerBack.title}</Text>}
      </HeaderBackContext.Consumer>

      {/* 获取标题在父屏幕中是否可见 */}
      <HeaderShownContext.Consumer>
        {headerShown => (
          <Text>{headerShown ? 'Header is shown' : 'Header is hidden'}</Text>
        )}
      </HeaderShownContext.Consumer>

      {/* 获取标题的高度 */}
      <HeaderHeightContext.Consumer>
        {height => <Text>headerHeight: {height}</Text>}
      </HeaderHeightContext.Consumer>

      {/* 使用 Button 元素跳转 */}
      <Button screen="MyMaterialTopTab">Go Material Top Tab</Button>

      {/* 使用 linkTo 钩子跳转 */}
      <Button onPress={() => linkTo('/MyMaterialTopTab')}>
        Link to MyMaterialTopTab
      </Button>

      {/* 使用dispatch 发送 action属性跳转 */}
      <Button
        onPress={() =>
          navigation.dispatch(StackActions.push('MyMaterialTopTab'))
        }>
        go MyMaterialTopTab push
      </Button>

      {/* 使用dispatch 发送 navigate action */}
      <Button
        onPress={() =>
          navigation.dispatch(CommonActions.navigate('MyMaterialTopTab', {}))
        }>
        go MyMaterialTopTab navigate
      </Button>

      {/* 使用 dispatch 发送navigate */}
      <Button
        onPress={() =>
          navigation.dispatch(
            CommonActions.navigate({
              name: 'MyMaterialTopTab', // 屏幕名
              params: {}, // 参数
              merge: false, // 是否对对当前屏幕的参数合并到 params
              path: '', // 与屏幕关联的路径（来自深层链接或通用链接）
            }),
          )
        }>
        go MyMaterialTopTab navigate
      </Button>
    </>
  )
}
