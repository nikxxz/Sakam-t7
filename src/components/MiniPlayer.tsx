import React from 'react';
import {Box, Text} from 'react-native-design-utility';
import {usePlayerContext} from '../contexts/PlayerContext';
import Icon from 'react-native-vector-icons/Feather';
import {Image, TouchableOpacity} from 'react-native';
import {theme} from '../constants/theme';

const MiniPlayer = () => {
  const playerContext = usePlayerContext();

  if (playerContext.isEmpty || playerContext.currentTrack) {
    return null;
  }

  return (
    <Box
      h={75}
      bg="#191919"
      px="sm"
      style={{borderTopWidth: 1, borderTopColor: theme.color.greyLightest}}>
      <Box f={1} dir="row" align="center" justify="between">
        <Box
          h={50}
          w={50}
          bg="greenLighter"
          radius={10}
          style={{overflow: 'hidden'}}>
          {/* <Image
            source={{uri: playerContext.currentTrack.artwork}}
            style={{flex: 1}}
          /> */}
        </Box>
        <Box f={1} mr={20} ml={20}>
          <Text color="white" size="sm">
            {/* {playerContext.currentTrack.title} */}
          </Text>
        </Box>
        <Box mr="sm">
          {playerContext.isPaused && (
            <TouchableOpacity onPress={() => playerContext.play()}>
              <Icon name="play" size={30} color={theme.color.greenLighter} />
            </TouchableOpacity>
          )}

          {playerContext.isPlaying && (
            <TouchableOpacity onPress={() => playerContext.pause()}>
              <Icon name="pause" size={30} color={theme.color.greenLighter} />
            </TouchableOpacity>
          )}

          {(playerContext.isStopped || playerContext.isEmpty) && (
            <TouchableOpacity onPress={() => null}>
              <Icon name="play" size={30} color={theme.color.greenLighter} />
            </TouchableOpacity>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default MiniPlayer;
