import {Text} from '@react-navigation/elements'
import React, {useState} from 'react'
import {Modal, TouchableHighlight, View} from 'react-native'

export default function MyModal() {
  const [visibleModal, setVisibleModal] = useState(false)

  return (
    <View style={{padding: 20}}>
      <Modal
        animationType="slide"
        visible={visibleModal}
        transparent
        onShow={() => console.log('Modal show.')}
        onRequestClose={() => {
          /* Alert.alert('Close Modal'); */
          setVisibleModal(false)
        }}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              margin: 20,
              backgroundColor: '#fff',
              borderRadius: 20,
              padding: 35,
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
            <Text>Hello World.</Text>

            <TouchableHighlight
              onPress={() => setVisibleModal(false)}
              style={{
                backgroundColor: '#2196F3',
                borderRadius: 20,
                padding: 10,
                elevation: 2,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                Hide Modal
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <TouchableHighlight
        style={{
          backgroundColor: '#F194FF',
          borderRadius: 20,
          padding: 10,
          elevation: 2,
        }}
        underlayColor="#E094FF"
        onPress={() => setVisibleModal(true)}>
        <Text style={{color: '#fff', fontWeight: 'bold', textAlign: 'center'}}>
          Show Modal
        </Text>
      </TouchableHighlight>
    </View>
  )
}
