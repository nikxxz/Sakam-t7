import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import MiniPlayer from '../components/MiniPlayer';
import Player from '../screens/Player';

const Stack = createStackNavigator();

const PlayerStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MiniPlayer" component={MiniPlayer} />
      <Stack.Screen name="Player" component={Player} />
    </Stack.Navigator>
  );
};

export default PlayerStackScreen;
