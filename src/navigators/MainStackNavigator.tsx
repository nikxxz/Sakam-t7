import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from '../components/home';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
