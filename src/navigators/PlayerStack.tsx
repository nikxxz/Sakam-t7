import React from 'react';
import MiniPlayer from '../components/MiniPlayer';
import Player from '../screens/Player';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

const Stack = createSharedElementStackNavigator();

const PlayerStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MiniPlayer" component={MiniPlayer} />
      <Stack.Screen
        name="Player"
        component={Player}
        sharedElements={route => {
          return ['player'];
        }}
        options={{animationEnabled: true, animationTypeForReplace: 'push'}}
      />
    </Stack.Navigator>
  );
};

export default PlayerStackScreen;
