import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import MyButton from '../native/MyButton.tsx'
import MyDimensions from '../native/MyDimensions.tsx'
import {Image} from 'react-native'

const Tab = createMaterialTopTabNavigator()

/**
 * 对 TabView 的进一步封装组件
 * @constructor
 */
export function MaterialTopTab() {
  return (
    // backBehavior 返回行为：firstRoute 返回导航器的第一个屏幕
    // initialRoute: 返回 initialRouteName 传入的初始屏幕，如果不传则是第一个屏幕
    // order 返回屏幕聚焦之前定义的屏幕
    // history: 返回导航器上次访问的屏幕
    // none: 不处理返回
    // initialRouteName: 返回初始屏幕的名称
    <Tab.Navigator
      backBehavior="firstRoute"
      initialRouteName="MyDimensions"
      screenOptions={{
        // tabBar label style
        tabBarLabelStyle: {fontSize: 12},
        // tabBar item style
        tabBarItemStyle: {width: 100},
        tabBarStyle: {backgroundColor: 'pink'},
        // 可用于 headerTitle 和 tabBarLabel 后备的标题
        title: 'MaterialTopTab',
        // 自定义 tabBarLabel
        /*tabBarLabel: ({focused, color, children}) => (
        <Text style={{color}}>{children}</Text>
      )*/
        // 是否显示 label
        tabBarShowLabel: true,
        tabBarIcon: ({focused, color}) => (
          <Image
            tintColor={color}
            source={require('../../../assets/icon/home.png')}
            style={{width: 20, height: 20}}
          />
        ),
        // 右上角的点
        // tabBarBadge: () => ()
        // 自定义指示器
        // tabBarIndicator: () => ()
        // 指示器样式
        // tabBarIndicatorStyle: {}
        // 指示器容器样式
        // tabBarIndicatorContainerStyle: {}
        // 选中时 icon和label的颜色
        // tabBarActiveTintColor: 'red'
        // 未选中时 icon 和 label 的颜色
        // tabBarInactiveTintColor: 'white'
        // 按下的颜色
        // tabBarPressColor: 'white'
        // 按下的透明度
        // tabBarPressOpacity: 0.1
        // 弹簧效果
        tabBarBounces: true,
        // 是否支持tab滚动
        tabBarScrollEnabled: true,
        // 选项卡视图容器样式
        tabBarContentContainerStyle: {},
        // 是否启用手势滚动
        swipeEnabled: true,
        // 详细使用参考 tabView
        // lazy: true
        // 其他参考 TabView
      }}>
      <Tab.Screen name="MyButton" component={MyButton} />
      <Tab.Screen name="MyDimensions" component={MyDimensions} />
    </Tab.Navigator>
  )
}

/** 自定义 tabBar 示例

 import { Animated, View, TouchableOpacity, Platform } from 'react-native';
 import { useLinkBuilder, useTheme } from '@react-navigation/native';

 function MyTabBar({ state, descriptors, navigation, position }) {
 const { colors } = useTheme();
 const { buildHref } = useLinkBuilder();

 return (
 <View style={{ flexDirection: 'row' }}>
 {state.routes.map((route, index) => {
 const { options } = descriptors[route.key];
 const label =
 options.tabBarLabel !== undefined
 ? options.tabBarLabel
 : options.title !== undefined
 ? options.title
 : route.name;

 const isFocused = state.index === index;

 const onPress = () => {
 const event = navigation.emit({
 type: 'tabPress',
 target: route.key,
 canPreventDefault: true,
 });

 if (!isFocused && !event.defaultPrevented) {
 navigation.navigate(route.name, route.params);
 }
 };

 const onLongPress = () => {
 navigation.emit({
 type: 'tabLongPress',
 target: route.key,
 });
 };

 const inputRange = state.routes.map((_, i) => i);
 const opacity = position.interpolate({
 inputRange,
 outputRange: inputRange.map((i) => (i === index ? 1 : 0)),
 });

 return (
 <TouchableOpacity
 href={buildHref(route.name, route.params)}
 accessibilityRole={Platform.OS === 'web' ? 'link' : 'button'}
 accessibilityState={isFocused ? { selected: true } : {}}
 accessibilityLabel={options.tabBarAccessibilityLabel}
 testID={options.tabBarButtonTestID}
 onPress={onPress}
 onLongPress={onLongPress}
 style={{ flex: 1 }}
 >
 <Animated.Text style={{ opacity, color: colors.text }}>
 {label}
 </Animated.Text>
 </TouchableOpacity>
 );
 })}
 </View>
 );
 }


 <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
 </Tab.Navigator>;

 */
