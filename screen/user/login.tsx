import React, {useContext} from 'react'
import {Button, Text, View} from 'react-native'
import {RootStackScreenProps} from '../../types/navigation'
import {UserContext} from '../../context/user.tsx'

export default function LoginScreen({
  navigation,
}: RootStackScreenProps<'Login'>) {
  const userContext = useContext(UserContext)

  function login() {
    userContext.signIn && userContext.signIn('login token')
  }

  return (
    <View>
      <Text>LoginScreen</Text>
      <Button
        title="Back to Home"
        onPress={() => {
          login()
          /*navigation.popTo('Home', {
            screen: 'Component',
            params: {
              post: 'Login Done!',
            },
          });*/
        }}
      />
    </View>
  )
}
