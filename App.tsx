import 'react-native-gesture-handler';
import React from 'react';
import {Box, UtilityThemeProvider} from 'react-native-design-utility';
import {theme} from './src/constants/theme';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigator from './src/navigators/MainStackNavigator';
import TrackPlayer, {Capability} from 'react-native-track-player';
import 'react-native-url-polyfill/auto';
import {StatusBar} from 'react-native';
import {PlayerContextProvider} from './src/contexts/PlayerContext';
import LoadingScreen from './src/components/LoadingScreen';

const App = () => {
  const [isReady, setIsReady] = React.useState<boolean>(false);

  React.useEffect(() => {
    TrackPlayer.setupPlayer()
      .then(() => {
        //{minBuffer:2,playBuffer:1}
        setIsReady(true);
      })
      .catch(e => {
        console.log(e);
      });
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
          <NavigationContainer theme={{colors: {background: '#212121'}}}>
            <MainStackNavigator />
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
