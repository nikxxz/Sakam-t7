import React from 'react';
import {Box, Text} from 'react-native-design-utility';
import {theme} from '../constants/theme';

const Playlist = () => {
  return (
    <Box f={1} backgroundColor="#212121" justify="center">
      <Text color={theme.color.white} center>
        Playlist Page
      </Text>
    </Box>
  );
};

export default Playlist;
