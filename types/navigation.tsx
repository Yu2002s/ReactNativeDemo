import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { CompositeScreenProps, NavigatorScreenParams, } from '@react-navigation/native'
import { NativeStackNavigationProp, NativeStackScreenProps, } from '@react-navigation/native-stack'

/**
 * 根栈
 */
export type RootStackParamList = {
  Home: NavigatorScreenParams<BottomTabParamList>

  Login: undefined

  Splash: undefined
} & ComponentParamList &
  HookParamList

/**
 * 组件
 */
export type ComponentParamList = {
  MyView: undefined

  MyText: undefined

  MyImage: undefined

  MyTextInput: undefined

  MyButton: undefined

  MySwitch: undefined

  MyFlatList: undefined

  MyBackHandler: undefined

  MyPermission: undefined

  MyToast: undefined

  MyActivityIndicator: undefined

  MyAlert: undefined

  MyAnimated: undefined

  MyDimensions: undefined

  MyKeyboardAvoidingView: undefined

  MyLinks: undefined

  MyModal: undefined

  MyRefreshControl: undefined

  MyStatusBar: undefined

  MyNavigationComponents: undefined

  MyTabView: undefined

  MyMaterialTopTab: undefined
}

export type HookParamList = {
  MyCallback: undefined

  MyWindowDimensions: undefined

  MyMemo: undefined

  MyNavigation: undefined

  MyNavigationState: undefined

  MyFocusEffect: undefined

  MyPreventRemove: undefined
}

/**
 * 底部标签
 */
export type BottomTabParamList = {
  /**
   * 组件列表
   */
  Component: {
    post: string
  }

  Hook: undefined

  Other: undefined
}

/**
 * 根导航屏幕 Props 类型
 */
export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>

/**
 * 根导航导航器 Prop 类型
 */
export type RootStackNavigationProp<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>

/**
 * 底部 tab 导航屏幕 Props 类型
 */
export type BottomTabStackScreenProps<T extends keyof BottomTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<BottomTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >

declare global {
  namespace ReactNavigation {
    /**
     * 对根栈参数列表类型进行扩展，可以获得全局提示
     */
    interface RootParamList extends RootStackParamList {}
  }
}
