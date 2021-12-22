import React from 'react';
import MiniPlayer from '../components/MiniPlayer';
import Player from '../screens/Player';
import {createStackNavigator} from '@react-navigation/stack';
import {Transition0} from '../constants/animations';

const Stack = createStackNavigator();

const PlayerStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={Transition0}>
      <Stack.Screen
        name="MiniPlayer"
        component={MiniPlayer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Player"
        component={Player}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default PlayerStackScreen;
