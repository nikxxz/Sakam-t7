import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import Player from '../screens/Player';
import PlayerStackScreen from './PlayerStack';
import Tabs from './Tabs';

const Stack = createSharedElementStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'black'},
      }}>
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{animationEnabled: true, animationTypeForReplace: 'push'}}
      />
      <Stack.Screen
        name="Player"
        component={Player}
        options={{animationEnabled: true, animationTypeForReplace: 'push'}}
      />
      <Stack.Screen
        name="PlayerStack"
        component={PlayerStackScreen}
        options={{animationEnabled: true, animationTypeForReplace: 'pop'}}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
