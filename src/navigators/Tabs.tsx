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
import Icon from 'react-native-vector-icons/Ionicons';
import Playlist from '../screens/Playlist';

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();

const NowPlayingStackNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="AlbumScreen" component={AlbumScreen} />
      <HomeStack.Screen name="ArtistScreen" component={ArtistDetails} />
    </HomeStack.Navigator>
  );
};

const LibraryStack = createStackNavigator();

const LibraryStackNavigator = () => {
  return (
    <LibraryStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="ProfileScreen">
      <LibraryStack.Screen name="ProfileScreen" component={Profile} />
      <LibraryStack.Screen name="EditProfile" component={EditProfile} />
      <LibraryStack.Screen name="Library" component={Library} />
      <LibraryStack.Screen name="Help" component={Help} />
      <LibraryStack.Screen name="Playlist" component={Playlist} />
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
      <SearchStack.Screen
        name="Album"
        component={AlbumScreen}
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
        tabBarLabelPosition: 'below-icon',
        tabBarLabelStyle: {
          fontWeight: '700',
          textTransform: 'uppercase',
          fontSize: 10,
        },
        //tabBarIconStyle: {display: 'none'},
        tabBarActiveTintColor: theme.color.greenLighter,
        tabBarInactiveTintColor: theme.color.greyDark,
        tabBarStyle: {
          backgroundColor: 'black',
          borderTopWidth: 0,
          paddingTop: 10,
        },
      }}>
      <Tab.Screen
        name="NowPlaying"
        component={NowPlayingStackNavigator}
        options={{
          title: '',
          tabBarLabel: '',
          headerStyle: {backgroundColor: 'black'},
          headerShown: false,
          tabBarIcon: ({color}) => {
            return <Icon name="home" size={24} color={color} />;
          },
        }}
      />
      <Tab.Screen
        options={{
          title: '',
          tabBarLabel: '',
          headerStyle: {backgroundColor: 'black'},
          headerShown: false,
          tabBarIcon: ({color}) => {
            return <Icon name="search" size={24} color={color} />;
          },
        }}
        name="SearchStack"
        component={SearchStackNavigator}
      />
      <Tab.Screen
        options={{
          title: '',
          tabBarLabel: '',
          headerStyle: {backgroundColor: 'black'},
          headerShown: false,
          tabBarIcon: ({color}) => {
            return <Icon name="person-outline" size={24} color={color} />;
          },
        }}
        name="LibraryStack"
        component={LibraryStackNavigator}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
