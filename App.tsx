import 'react-native-gesture-handler';
import React from 'react';
import {Box, UtilityThemeProvider} from 'react-native-design-utility';
import {theme} from './src/constants/theme';
import {NavigationContainer} from '@react-navigation/native';
import TrackPlayer, {Capability} from 'react-native-track-player';
import 'react-native-url-polyfill/auto';
import {StatusBar} from 'react-native';
import {PlayerContextProvider} from './src/contexts/PlayerContext';
import LoadingScreen from './src/components/LoadingScreen';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import AuthStack from './src/navigators/AuthStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { supabase } from './src/supabase/supabaseInit';
import moment from 'moment';

GoogleSignin.configure({
  webClientId:
    '347522941225-4215pbarssvf7vlvqmhljug3ngdrhdgb.apps.googleusercontent.com',
  offlineAccess: true,
});

const App = () => {
  const [isReady, setIsReady] = React.useState<boolean>(false);

  React.useEffect(() => {
    TrackPlayer.setupPlayer()
      .then(() => {
        setIsReady(true);
      })
      .catch(e => {
        console.log(e);
      });

     
       
  }, []);


  const _getUser = async () => {
    try {
      const user = await AsyncStorage.getItem(
        'user'
      );
      console.log(user)
      return user;
    } catch (error) {
      // Error saving data
    }
  };

  TrackPlayer.updateOptions({
    stopWithApp: true,
    alwaysPauseOnInterruption: true,
    capabilities: [
      Capability.Pause,
      Capability.Play,
      Capability.SeekTo,
      Capability.SkipToNext,
      Capability.SkipToPrevious,
      Capability.Stop,
    ],
    compactCapabilities: [
      Capability.Play,
      Capability.Pause,
      Capability.Stop,
      Capability.SkipToNext,
      Capability.SkipToPrevious,
    ],
    notificationCapabilities: [
      Capability.Play,
      Capability.Pause,
      //Capability.Stop,
      Capability.SkipToNext,
      Capability.SkipToPrevious,
    ],
  });

  return (
    <UtilityThemeProvider theme={theme}>
      {isReady ? (
        <PlayerContextProvider>
          <NavigationContainer theme={{colors:{background: '#212121'}}}>
            <AuthStack />
          </NavigationContainer>
          <StatusBar barStyle={'light-content'} backgroundColor={'#212121'} />
        </PlayerContextProvider>
      ) : (
        <Box f={1} center>
          <LoadingScreen />
        </Box>
      )}
    </UtilityThemeProvider>
  );
};

export default App;
