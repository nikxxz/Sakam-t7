import React from 'react';
import {Box, Text} from 'react-native-design-utility';
import {theme} from '../constants/theme';

const Help = () => {
  return (
    <Box f={1} backgroundColor="#191919" justify="center">
      <Text color={theme.color.white} center>
        Help Page
      </Text>
    </Box>
  );
};

export default Help;
