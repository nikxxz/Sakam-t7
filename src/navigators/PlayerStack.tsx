import React from 'react';
import MiniPlayer from '../components/MiniPlayer';
import Player from '../screens/Player';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

const Stack = createSharedElementStackNavigator();

const PlayerStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="MiniPlayer"
        component={MiniPlayer}
        options={{animationEnabled: true, animationTypeForReplace: 'push'}}
      />
      <Stack.Screen
        name="Player"
        component={Player}
        options={{animationEnabled: true, animationTypeForReplace: 'pop'}}
      />
    </Stack.Navigator>
  );
};

export default PlayerStackScreen;
