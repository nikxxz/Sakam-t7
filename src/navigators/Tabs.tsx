import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AlbumScreen from '../screens/AlbumScreen';
import MiniPlayer from '../components/MiniPlayer';
import {theme} from '../constants/theme';
import ArtistDetails from '../screens/artistDetails';
import EditProfile from '../screens/EditProfile';
import Help from '../screens/Help';
import Home from '../screens/home';
import Profile from '../screens/profile';
import Search from '../screens/search';
import Library from '../screens/library';

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();

const NowPlayingStackNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="AlbumScreen" component={AlbumScreen}/>
    </HomeStack.Navigator>
  );
};

const LibraryStack = createStackNavigator();

const LibraryStackNavigator = () => {
  return (
    <LibraryStack.Navigator screenOptions={{headerShown: false}}>
      <LibraryStack.Screen name="ProfileScreen" component={Profile} />
      <LibraryStack.Screen name="EditProfile" component={EditProfile} />
      <LibraryStack.Screen name="Library" component={Libra} />
      <LibraryStack.Screen name="Help" component={Help} />
    </LibraryStack.Navigator>
  );
};

const SearchStack = createStackNavigator();

const SearchStackNavigator = () => {
  return (
    <SearchStack.Navigator screenOptions={{headerShown: false}}>
      <SearchStack.Screen name="Search" component={Search} />
      <SearchStack.Screen
        name="Artist"
        component={ArtistDetails}
        options={{headerTitle: ''}}
      />
    </SearchStack.Navigator>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBar={tabProps => (
        <>
          <MiniPlayer />
          <BottomTabBar {...tabProps} />
        </>
      )}
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: 'beside-icon',
        tabBarLabelStyle: {
          fontWeight: '700',
          textTransform: 'uppercase',
          fontSize: 10,
        },
        tabBarIconStyle: {display: 'none'},
        tabBarActiveTintColor: theme.color.greenLighter,
        tabBarInactiveTintColor: theme.color.greyDark,
        tabBarStyle: {backgroundColor: 'black'},
      }}>
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
          title: 'Profile',
        }}
        name="LibraryStack"
        component={LibraryStackNavigator}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
