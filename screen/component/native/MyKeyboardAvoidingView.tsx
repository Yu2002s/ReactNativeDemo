import {Text} from '@react-navigation/elements'
import React from 'react'
import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableNativeFeedback,
  View,
} from 'react-native'

export default function MyKeyboardAvoidingView() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <TouchableNativeFeedback onPress={Keyboard.dismiss}>
        <View style={{padding: 24, flex: 1, justifyContent: 'space-around'}}>
          <Text style={{fontSize: 32, marginBottom: 48}}>Header</Text>
          <TextInput
            placeholder="Username"
            style={{
              height: 40,
              borderColor: '#000',
              borderBottomWidth: 1,
              marginBottom: 36,
            }}
          />
          <View style={{backgroundColor: '#fff', marginTop: 12}}>
            <Button title="Submit" onPress={() => null} />
          </View>
        </View>
      </TouchableNativeFeedback>
    </KeyboardAvoidingView>
  );
}
