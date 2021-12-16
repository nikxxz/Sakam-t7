import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from '../components/home';
import Library from '../components/library';
import Search from '../components/search';

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();

const NowPlayingStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
};

const LibraryStack = createStackNavigator();

const LibraryStackNavigator = () => {
  return (
    <LibraryStack.Navigator>
      <LibraryStack.Screen name="Library" component={Library} />
    </LibraryStack.Navigator>
  );
};

const SearchStack = createStackNavigator();

const SearchStackNavigator = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={Search} />
    </SearchStack.Navigator>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        options={{
          title: 'Now Playing',
        }}
        name="NowPlaying"
        component={NowPlayingStackNavigator}
      />
      <Tab.Screen
        options={{
          title: 'Search',
        }}
        name="SearchStack"
        component={SearchStackNavigator}
      />
      <Tab.Screen
        options={{
          title: 'Library',
        }}
        name="LibraryStack"
        component={LibraryStackNavigator}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
