import {Text} from '@react-navigation/elements'
import React, {useEffect, useState} from 'react'
import {
  FlatList,
  ListRenderItemInfo,
  TouchableHighlight,
  View,
} from 'react-native'

type ItemData = {
  id: string;
  title: string;
};

/* const DATA: ItemData[] = [] */

const DATA: ItemData[] = Array.from({length: 100}).fill({
  id: (Math.random() * 1000).toString(),
  title: 'List Item',
}) as ItemData[];

/* type ItemProps = {
  title: string
}
 */
/* function Item({title}: ItemProps) {
  return (
    <View
      style={{
        padding: 20,
        backgroundColor: '#f8c2ff',
        marginVertical: 8,
        marginHorizontal: 16,
      }}>
      <Text style={{fontSize: 32}}>{title}</Text>
    </View>
  )
}
 */

/* type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
}; */

/* const Item = ({item, onPress, backgroundColor, textColor}: ItemProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{padding: 20, margin: 10, backgroundColor}}>
      <Text style={{fontSize: 10, color: textColor}}>{item.title}</Text>
    </TouchableOpacity>
  )
} */

/**
 * 类似 Android RecyclerView，只加载屏幕显示的内容，比 ScrollView 性能更高。
 * @returns JSX
 */
export default function MyFlatList() {
  const [selectedId, setSetselectedId] = useState<string>();
  const [refreshing, setRefreshing] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // 关闭下拉刷新加载
      setRefreshing(false);
    }, 3000);
  }, []);

  /**
   * 使用函数方式不会让组件导致额外渲染，因为 renderItem 只会创建一次，
   * 使用箭头函数方式传递 props，使其不会在每次 render 时生成一个新的函数，保证 props 的不可变性
   * @param param0
   * @returns
   */
  /*  const renderItem = ({item}: {item: ItemData}) => {
    const backgroundColor = item.id === selectedId ? 'red' : 'skyblue'

    const textColor = item.id === selectedId ? 'white' : 'black'

    return (
      <Item
        item={item}
        onPress={() => setSetselectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={textColor}
      />
    )
  } */

  /*  {<FlatList
      style={{flex: 1}}
      data={DATA}
      numColumns={2}
      renderItem={({item}) => <Item title={item.title} />}
      keyExtractor={item => item.id}
    />} */

  function renderItem2({
    item,
    index,
    separators,
  }: ListRenderItemInfo<ItemData>) {
    return (
      /* 
        onShowUnderlay：当按下时回调
        onHideUnderlay: 当松开时回调
        调用 separators.highlight 将更新 ItemSeparatorComponent 中的 highlighted的属性
      */
      <TouchableHighlight
        onPress={() => setSetselectedId(item.id)}
        onShowUnderlay={separators.highlight}
        onHideUnderlay={separators.unhighlight}>
        <View style={{backgroundColor: 'white'}}>
          <Text>
            {item.title} {index}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }

  return (
    /* numColmns: 列 */

    /* 使用 extraData={state}：确保在状态变更时组件能够更新 */
    <FlatList
      data={DATA}
      renderItem={renderItem2}
      keyExtractor={(item, index) => item.id + index}
      /* data 额外的数据，如果是一个 object 则需要先复制整个对象，在进行更新页面才会重新渲染 */
      extraData={selectedId}
      ItemSeparatorComponent={({highlighted}) => (
        <Text style={{backgroundColor: highlighted ? '#fff' : 'red'}}>
          {highlighted.toString()}
        </Text>
      )}
      /* 当组件为空时使用此组件，可以是 component和 function */
      ListEmptyComponent={<Text>列表为空</Text>}
      /* 列表尾部 */
      ListFooterComponent={<Text>我是尾部</Text>}
      /* 尾部组件样式 */
      ListFooterComponentStyle={{
        justifyContent: 'center',
        backgroundColor: 'skyblue',
      }}
      /* ListHeaderComponent... */
      /* 如果设置列，则可以额外设置每列的样式 */
      /* columnWrapperStyle={{}} */
      /* 如果你提前知道了每项的高度，则可以在这里进行指定，可以优化性能，如果有分割线，也要考虑计算到 offset */
      getItemLayout={(data, index) => ({
        length: 20,
        offset: 20 * index,
        index,
      })}
      /* horizontal: 水平显示 */
      /* 指定一开始渲染的元素数量，保证用最短的时间给用户呈现内容 */
      initialNumToRender={20}
      /* 开始时，屏幕顶端显示的元素位置，而不是第一个元素。需要先设置 getItemLayout 属性 */
      initialScrollIndex={10}
      /* inverted: 翻转显示 */
      onEndReached={({distanceFromEnd}) => {
        // distanceFromEnd: 距离终点距离
        console.log('滚动到底部了: ', distanceFromEnd);
      }}
      /* 距离底部多远触发 onEndReached，这是一个百分比 */
      onEndReachedThreshold={0.1}
      /* 设置此项顶部会出现下拉刷新控件 */
      onRefresh={() => {
        console.log('onRefresh');
      }}
      /* 启用刷新 */
      refreshing={refreshing}
    />
  );
}
