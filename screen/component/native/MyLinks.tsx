import {Text} from '@react-navigation/elements'
import React, {useCallback, useEffect, useState} from 'react'
import {Alert, Button, Linking, View} from 'react-native'

const OpenUrlButton = ({url, children}: {url: string; children: string}) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url)
    if (supported) {
      await Linking.openURL(url)
    } else {
      Alert.alert('不能打开此链接')
    }
  }, [url])
  return <Button onPress={handlePress} title={children} />
}

const OpenSettingButton = ({children}: {children: string}) => {
  const handlePress = useCallback(async () => {
    // 打开 App 的自定义设置
    await Linking.openSettings();
  }, []);

  return <Button title={children} onPress={handlePress} />;
};

const useInitialURL = () => {
  const [url, setUrl] = useState<string | null>(null);
  const [processing, setProcessing] = useState(true);

  useEffect(() => {
    const getUrlAsync = async () => {
      const initialUrl = await Linking.getInitialURL();

      setTimeout(() => {
        setUrl(initialUrl);
        setProcessing(false);
      }, 1000);
    };

    getUrlAsync();
  }, []);

  return {url, processing};
};

type SendIntentButtonProps = {
  action: string;
  children: string;
  extras?: Array<{
    key: string;
    value: string | number | boolean;
  }>;
};

const SendIntentButton = ({
  action,
  extras,
  children,
}: SendIntentButtonProps) => {
  const handlePress = useCallback(async () => {
    try {
      await Linking.sendIntent(action, extras);
    } catch (e: any) {
      Alert.alert(e.message);
    }
  }, [action, extras]);

  return <Button title={children} onPress={handlePress} />;
};

export default function MyLinks() {
  const {url: initialUrl, processing} = useInitialURL();

  useEffect(() => {
    Linking.addEventListener('url', e => {
      console.log(e);
    });
  }, []);

  return (
    <View style={{padding: 20}}>
      <OpenUrlButton url="http://baidu.com">打开链接</OpenUrlButton>
      <OpenSettingButton>打开设置</OpenSettingButton>

      <SendIntentButton action="android.intent.action.POWER_USAGE_SUMMARY">
        打开电池使用信息页面
      </SendIntentButton>
      <SendIntentButton
        action="android.settings.APP_NOTIFICATION_SETTINGS"
        extras={[
          {
            key: 'android.provider.extra.APP_PACKAGE',
            value: 'com.dongyu.movies',
          },
        ]}>
        打开App通知设置
      </SendIntentButton>

      <Text>
        {processing
          ? 'Processing the inital url from a deep link'
          : `The deep link: ${initialUrl || 'none'}`}
      </Text>
    </View>
  );
}
