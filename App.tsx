import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Button, getHeaderTitle, Header, Text } from '@react-navigation/elements'
import { DarkTheme, DefaultTheme, NavigationContainer, } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useContext, useEffect, useMemo, useReducer } from 'react'
import { useColorScheme, View } from 'react-native'
import ComponentList from './screen/component'
import MyActivityIndicator from './screen/component/native/MyAcitivityIndicator'
import MyAlert from './screen/component/native/MyAlert'
import MyAnimated from './screen/component/native/MyAnimated'
import MyBackHandler from './screen/component/native/MyBackHandler'
import MyButton from './screen/component/native/MyButton'
import MyDimensions from './screen/component/native/MyDimensions'
import MyFlatList from './screen/component/native/MyFlatList'
import MyImage from './screen/component/native/MyImage'
import MyKeyboardAvoidingView from './screen/component/native/MyKeyboardAvoidingView'
import MyLinks from './screen/component/native/MyLinks'
import MyModal from './screen/component/native/MyModal'
import MyPermission from './screen/component/native/MyPermission'
import MyRefreshControl from './screen/component/native/MyRefreshControl'
import MyStatusBar from './screen/component/native/MyStatusBar'
import MySwitch from './screen/component/native/MySwitch'
import MyText from './screen/component/native/MyText'
import MyTextInput from './screen/component/native/MyTextInput'
import MyToast from './screen/component/native/MyToast'
import MyView from './screen/component/native/MyView'
import MyHook from './screen/hook'
import LoginScreen from './screen/user/login'
import { BottomTabParamList, RootStackParamList } from './types/navigation'
import MyCallback from './screen/hook/react/MyCallback.tsx'
import MyWindowDimensions from './screen/hook/native/MyWindowDimensions.tsx'
import MyMemo from './screen/hook/react/MyMemo.tsx'
import { MyNavigation } from './screen/hook/navigation/MyNavigation.tsx'
import { MyNavigationState } from './screen/hook/navigation/MyNavigationState.tsx'
import { MyFocusEffect } from './screen/hook/navigation/MyFocusEffect.tsx'
import { MyPreventRemove } from './screen/hook/navigation/MyPreventRemove.tsx'
import { NavigationComponents } from './screen/component/navigation/navigationComponents.tsx'
import TabViewComponent from './screen/component/navigation/TabViewComponent.tsx'
import { MaterialTopTab } from './screen/component/navigation/MaterialTopTab.tsx'
import { UserContext, UserState } from './context/user.tsx'
import SplashScreen from './screen/splash'

/**
 * 根栈
 */
const RootStack = createNativeStackNavigator<RootStackParamList>()

/**
 * 底部标签栈
 */
const BottomTabStack = createBottomTabNavigator<BottomTabParamList>()

const HomeScreen = () => {
  const userContext = useContext(UserContext)

  return (
    <BottomTabStack.Navigator
      screenOptions={{headerShown: true}}
      screenListeners={{
        tabPress: e => {
          console.log('homeStack tabPress: ', e.target)
        },
      }}>
      <BottomTabStack.Screen name="Component" component={ComponentList} />
      <BottomTabStack.Screen
        options={{title: 'Hook(钩子)'}}
        name="Hook"
        component={MyHook}
      />
      <BottomTabStack.Screen name="Other">
        {() => (
          <View style={{padding: 20}}>
            <Button screen="Login">Go Login</Button>
            <Text onPress={() => userContext.signOut && userContext.signOut()}>
              Log out
            </Text>
          </View>
        )}
      </BottomTabStack.Screen>
    </BottomTabStack.Navigator>
  )
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'
  // const [title, setTitle] = useState('React Native Demo');

  const [user, dispatch] = useReducer(userReducer, initialUserState)

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken: string | null = null
      try {
        // userToken = await SecureStore.getItem('userToken')
        // 这里从本地获取保存的 token
        userToken = await new Promise(resolve => {
          setTimeout(() => {
            const num = Math.random()
            resolve(num < 0.5 ? 'testToken' : null)
          }, 3000)
        })
      } catch (e: any) {
        console.error(e)
      }

      // 通知刷新 token
      dispatch({type: 'refreshToken', token: userToken})
    }

    // 异步获取保存的 token
    bootstrapAsync()
  }, []) // 依赖空数组，保证只加载一次

  // 使用 userMemo 缓存 userContext，避免每次渲染都创建新的对象
  // 这里的 userContext 提供给子组件使用
  const userContext: UserState = useMemo(() => {
    return {
      signIn: async data => {
        console.log('signInData: ', data)
        // 这里应该向服务器发送登录请求，还应该处理请求错误
        await new Promise(resolve => {
          setTimeout(resolve, 2000)
        })
        // 当请求成功时，保存 token 到本地
        // SecureStore.setItem('userToken', 'testToken')
        dispatch({type: 'signIn', token: 'testToken'})
      },
      signOut: () => dispatch({type: 'signOut'}),
      signUp: async data => {
        console.log('SignUpData: ', data)
        await new Promise(resolve => {
          setTimeout(resolve, 2000)
        })
        dispatch({type: 'signUp', token: 'testToken'})
      },
      isLoading: true,
      isSignout: user.isSignout,
      token: user.token,
    }
  }, [user])

  return (
    <UserContext.Provider value={userContext}>
      <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
        <RootStack.Navigator
          screenOptions={({route}) => ({
            headerShown: route.name !== 'Home',
            statusBarTranslucent: true,
            headerShadowVisible: false,
            statusBarBackgroundColor: 'transparent',
            statusBarStyle: isDarkMode ? 'light' : 'dark',
            header: ({options, route, back}) => (
              <Header
                {...options}
                back={back}
                title={getHeaderTitle(options, route.name)}
              />
            ),
          })}
          screenListeners={{
            focus: e => {
              console.log('rootStack focus: ', e.type)
            },
            /* state: e => {
              console.log('rootStack state: ', e.data);
            }, */
          }}>
          {user.isLoading ? (
            <RootStack.Screen name="Splash" component={SplashScreen} />
          ) : user.token == null ? (
            <RootStack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                animationTypeForReplace: user.isSignout ? 'pop' : 'push',
              }}
            />
          ) : (
            <RootStack.Screen
              name="Home"
              component={HomeScreen}
              navigationKey={user.token ? 'user' : 'guest'}
            />
          )}
          {/*<RootStack.Screen name="Login" component={LoginScreen} />*/}
          <RootStack.Screen name="MyView" component={MyView} />
          <RootStack.Screen name="MyText" component={MyText} />
          <RootStack.Screen name="MyImage" component={MyImage} />
          <RootStack.Screen name="MyTextInput" component={MyTextInput} />
          <RootStack.Screen name="MyButton" component={MyButton} />
          <RootStack.Screen name="MyFlatList" component={MyFlatList} />
          <RootStack.Screen name="MySwitch" component={MySwitch} />
          <RootStack.Screen name="MyBackHandler" component={MyBackHandler} />
          <RootStack.Screen name="MyPermission" component={MyPermission} />
          <RootStack.Screen name="MyToast" component={MyToast} />
          <RootStack.Screen
            name="MyActivityIndicator"
            component={MyActivityIndicator}
          />
          <RootStack.Screen name="MyAlert" component={MyAlert} />
          <RootStack.Screen name="MyAnimated" component={MyAnimated} />
          <RootStack.Screen name="MyDimensions" component={MyDimensions} />
          <RootStack.Screen
            name="MyKeyboardAvoidingView"
            component={MyKeyboardAvoidingView}
          />
          <RootStack.Screen name="MyLinks" component={MyLinks} />
          <RootStack.Screen name="MyModal" component={MyModal} />
          <RootStack.Screen
            name="MyRefreshControl"
            component={MyRefreshControl}
          />
          <RootStack.Screen name="MyStatusBar" component={MyStatusBar} />
          <RootStack.Screen name="MyCallback" component={MyCallback} />
          <RootStack.Screen
            name="MyWindowDimensions"
            component={MyWindowDimensions}
          />
          <RootStack.Screen name="MyMemo" component={MyMemo} />
          <RootStack.Screen name="MyNavigation" component={MyNavigation} />
          <RootStack.Screen
            name="MyNavigationState"
            component={MyNavigationState}
          />
          <RootStack.Screen name="MyFocusEffect" component={MyFocusEffect} />
          <RootStack.Screen
            name="MyPreventRemove"
            component={MyPreventRemove}
          />

          <RootStack.Screen
            name="MyNavigationComponents"
            component={NavigationComponents}
            options={{
              // 头部标题，返回一个组件
              headerTitle: ({tintColor, children}) => (
                <Text style={{color: tintColor, fontSize: 20}}>{children}</Text>
              ),
              // 头部标题对齐
              headerTitleAlign: 'center',
            }}
          />
          <RootStack.Screen
            options={{headerShown: true}}
            name="MyTabView"
            component={TabViewComponent}
          />
          <RootStack.Screen
            name="MyMaterialTopTab"
            component={MaterialTopTab}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  )
}

type UserAction = {
  type: 'signUp' | 'signIn' | 'signOut' | 'refreshToken'
  token?: string | null
}

const initialUserState: UserState = {
  token: null,
  isLoading: true,
  isSignout: false,
  signIn: () => {},
  signUp: () => {},
  signOut: () => {},
}

/**
 * 配置 reducer 更新 state
 * @param prevState 上一个 state
 * @param action 执行操作
 */
function userReducer(prevState: UserState, action: UserAction): UserState {
  switch (action.type) {
    case 'signUp':
      return {
        ...prevState,
        token: action.token,
        isLoading: false,
      }
    case 'signIn':
      return {
        ...prevState,
        token: action.token,
        isSignout: false,
      }
    case 'signOut':
      return {
        ...prevState,
        token: null,
        isSignout: true,
      }
    case 'refreshToken':
      return {
        ...prevState,
        token: action.token,
        isLoading: false,
      }
  }
}

export default App
