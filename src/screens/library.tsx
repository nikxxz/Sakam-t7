import React from 'react';
import {Box, Text} from 'react-native-design-utility';
import {theme} from '../constants/theme';

const Profile = () => {
  return (
    <Box>
      <Text color={theme.color.white} center>
        Library Page
      </Text>
    </Box>
  );
};

export default Profile;
