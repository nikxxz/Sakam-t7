import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import EditProfile from '../screens/EditProfile';
import Help from '../screens/Help';
import Playlist from '../screens/Playlist';
import Profile from '../screens/profile';

const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Playlist" component={Playlist} />
      <Stack.Screen name="Help" component={Help} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
