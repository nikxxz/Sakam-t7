import React from 'react';
import {Box, Text} from 'react-native-design-utility';
import {theme} from '../constants/theme';

const Profile = () => {
  return (
    <Box f={1} backgroundColor="#191919" justify="center">
      <Text color={theme.color.white} center>
        Library Page
      </Text>
    </Box>
  );
};

export default Profile;
