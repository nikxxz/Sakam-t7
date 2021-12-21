import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import {Box, Text} from 'react-native-design-utility';

const {height, width} = Dimensions.get('screen');

const Profile = () => {
  const navigation = useNavigation();
  return (
    <Box f={1} center bg="#191919">
      <Box f={3} width={width} align="center" justify="center">
        <Text color="white">RECENTS</Text>
      </Box>
      <Box f={4} width={width} px="xl" py="sm" dir="col">
        <Box py="md">
          <TouchableOpacity onPress={() => navigation.navigate('Library')}>
            <Text color="white">Library</Text>
          </TouchableOpacity>
        </Box>
        <Box py="md">
          <TouchableOpacity onPress={() => navigation.navigate('Playlist')}>
            <Text color="white">Playlists</Text>
          </TouchableOpacity>
        </Box>
        <Box py="md">
          <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
            <Text color="white">Edit Profile</Text>
          </TouchableOpacity>
        </Box>
        <Box py="md">
          <TouchableOpacity onPress={() => navigation.navigate('Help')}>
            <Text color="white">Help</Text>
          </TouchableOpacity>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
