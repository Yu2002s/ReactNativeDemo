import {Button, Text} from '@react-navigation/elements'
import React, {useEffect, useState} from 'react'
import {PermissionsAndroid, View} from 'react-native'

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: '需要相机权限?',
        message: 'App 需要你的相机权限，以拍摄照片',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'Ok',
      },
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('相机权限已获取')
    } else {
      console.log('用户已拒绝权限')
    }
  } catch (err) {
    console.error(err)
  }
}

export default function MyPermission() {
  const [isGrantedCamera, setGrantedCamera] = useState(false);

  useEffect(() => {
    async function checkPermission() {
      return await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      );
    }
    checkPermission().then(granted => {
      setGrantedCamera(granted);
    });
  }, []);
  return (
    <View style={{padding: 20}}>
      {isGrantedCamera ? <Text>权限已获取</Text> : <Text>权限未授权</Text>}
      <Button onPress={requestCameraPermission}>Request Permission</Button>
    </View>
  );
}
