import React from 'react';
import {Image, TouchableOpacity, Keyboard, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Box, Text} from 'react-native-design-utility';
import TrackPlayer, { State } from 'react-native-track-player';
import {usePlayerContext} from '../../../contexts/PlayerContext';
import {theme} from '../../../constants/theme';
export type AlbumProps = {
  songs: any;
};

const SearchModal11 = (props: any) => {
  const {song, index} = {...props};
  const playerContext = usePlayerContext();
  const navigation = useNavigation();
  const onPlay = () => {
    Keyboard.dismiss();
  };

  return (
    <Box h={90} dir="row" align="center" px="sm">
      <TouchableOpacity
        onPress={() => {
          if (playerContext.isPlaying) {
            TrackPlayer.skip(index - 1);
          } else {
            TrackPlayer.skip(index - 1);
            TrackPlayer.play();
          }
          // onPlay();
        }}>
        <Box
          h={70}
          w={70}
          bg="blueLight"
          radius={10}
          mr={10}
          style={{overflow: 'hidden'}}>
          <Image source={{uri: song.imageUri, height: '100%', width: '100%'}} />
        </Box>
      </TouchableOpacity>
      <Box f={1}>
        <Text bold color="white">
          {song.title}
        </Text>
        <Text size="xs" color="greyLightest">
          Album
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Artist', {data: song})}>
          <Text size="xs" color={theme.color.greenLighter}>
            {song.artist}
          </Text>
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

export default SearchModal11;