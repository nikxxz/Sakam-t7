import 'react-native-gesture-handler';
import React from 'react';
import {Box, UtilityThemeProvider} from 'react-native-design-utility';
import {theme} from './src/constants/theme';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigator from './src/navigators/MainStackNavigator';
import TrackPlayer, {Capability} from 'react-native-track-player';
import 'react-native-url-polyfill/auto';
import {ActivityIndicator} from 'react-native';
import {PlayerContextProvider} from './src/contexts/PlayerContext';

const App = () => {
  const [isReady, setIsReady] = React.useState<boolean>(false);

  React.useEffect(() => {
    TrackPlayer.setupPlayer().then(() => {
      setIsReady(true);
    });
  }, []);

  TrackPlayer.updateOptions({
    stopWithApp: true,
    capabilities: [
      Capability.JumpBackward,
      Capability.JumpForward,
      Capability.Pause,
      Capability.Play,
      Capability.PlayFromId,
      Capability.PlayFromSearch,
      Capability.SeekTo,
      Capability.Skip,
      Capability.SkipToNext,
      Capability.SkipToPrevious,
      Capability.Stop,
    ],
    compactCapabilities: [Capability.Play, Capability.Pause, Capability.Stop],
  });

  return (
    <UtilityThemeProvider theme={theme}>
      {isReady ? (
        <PlayerContextProvider>
          <NavigationContainer>
            <MainStackNavigator />
          </NavigationContainer>
        </PlayerContextProvider>
      ) : (
        <Box f={1} center>
          <ActivityIndicator />
        </Box>
      )}
    </UtilityThemeProvider>
  );
};

export default App;
