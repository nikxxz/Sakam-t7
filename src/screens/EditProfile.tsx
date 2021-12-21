import React from 'react';
import {Box, Text} from 'react-native-design-utility';
import { theme } from '../constants/theme';

const EditProfile = () => {
  return (
    <Box f={1} backgroundColor="#191919">
      <Text color={theme.color.white} center>
        Playlist Page
      </Text>
    </Box>
  );
};

export default EditProfile;
