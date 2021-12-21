import 'react-native-gesture-handler';
import React from 'react';
import {Box, UtilityThemeProvider} from 'react-native-design-utility';
import {theme} from './src/constants/theme';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigator from './src/navigators/MainStackNavigator';
import TrackPlayer, {Capability} from 'react-native-track-player';
import 'react-native-url-polyfill/auto';
import {ActivityIndicator, StatusBar} from 'react-native';
import {PlayerContextProvider} from './src/contexts/PlayerContext';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import S_ActivityIndicator from './src/components/components/ActivityIndicator';

const App = () => {
  const [isReady, setIsReady] = React.useState<boolean>(false);

  React.useEffect(() => {
    TrackPlayer.setupPlayer().then(() => {//{minBuffer:2,playBuffer:1}
      setIsReady(true);
      GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/drive.readonly'],
        webClientId:
          '155015939649-pdp85o1fhh5fa6aktrmkpu4b4ufika5c.apps.googleusercontent.com',
        offlineAccess: true,
        hostedDomain: '',
        forceCodeForRefreshToken: true,
        accountName: '',
        iosClientId: '<FROM DEVELOPER CONSOLE>',
        googleServicePlistPath: '',
        openIdRealm: '',
        profileImageSize: 120,
      })
    }).catch((e)=>{
      console.log(e);
    });;
  }, []);

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
          <NavigationContainer theme={{colors: {background: '#191919'}}}>
            <MainStackNavigator />
          </NavigationContainer>
          <StatusBar barStyle={'light-content'} backgroundColor={'#191919'} />
        </PlayerContextProvider>
      ) : (
        <Box f={1} center>
          {/* <ActivityIndicator /> */}
          <S_ActivityIndicator />

        </Box>
      )}
    </UtilityThemeProvider>
  );
};

export default App;
