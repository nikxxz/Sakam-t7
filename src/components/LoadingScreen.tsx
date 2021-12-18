import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Box} from 'react-native-design-utility';
import {theme} from '../constants/theme';

const LoadingScreen = () => {
  return (
    <Box f={1} center backgroundColor="#191919">
      <ActivityIndicator size="large" color={theme.color.greenLighter} />
    </Box>
  );
};

export default LoadingScreen;
