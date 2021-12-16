import 'react-native-gesture-handler';
import React from 'react';
import {UtilityThemeProvider} from 'react-native-design-utility';
import {theme} from './src/constants/theme';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigator from './src/navigators/MainStackNavigator';
import TrackPlayer from 'react-native-track-player';
import Tracks from './src/constants/Tracks';

const App = () => {
  React.useEffect(() => {
    (async () => {
      await TrackPlayer.setupPlayer().then(() => {
        console.log('Player Setup Succesful');
      });

      TrackPlayer.add(Tracks);

      await TrackPlayer.play();

      setTimeout(() => {
        TrackPlayer.stop();
      }, 2000);
    })();
  }, []);

  return (
    <UtilityThemeProvider theme={theme}>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </UtilityThemeProvider>
  );
};

export default App;
