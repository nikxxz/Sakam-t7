import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {Box, Text} from 'react-native-design-utility';
import TrackPlayer from 'react-native-track-player';
import {theme} from '../../../constants/theme';
import {usePlayerContext} from '../../../contexts/PlayerContext';

import styles from './styles';

export type AlbumHeaderProps = {
  album: any;
};

const AlbumHeader = (props: AlbumHeaderProps) => {
  const {album} = props;
  const isPlaying = false;
  //console.log(props);
  const playerContext = usePlayerContext();

  const onPlay = async () => {
    // console.log('PLAY SONGS CLICKED');
    if (playerContext.isPlaying) {
      await TrackPlayer.skip(0);
    } else {
      await TrackPlayer.skip(0);
      await TrackPlayer.play();
    }
  };

  return (
    <Box f={1} backgroundColor="#212121" pt={20} paddingHorizontal={12} mb={30}>
      <Box>
        <Box mr="sm" mt="xs">
          <Text color="white" size="lg" center>{album.title}</Text>
          <Text color="grey" size="sm" center>{album.by}</Text>
        </Box>

        <Box alignItems="center" mx="sm">
          <Image
            source={{
              uri: album.imageUri,
            }}
            style={styles.image}
          />
        </Box>
      </Box>

      <Box f={1} dir="row" justify="evenly" py="md" px="xs">
        <TouchableOpacity onPress={onPlay}>
          <Box
            backgroundColor={theme.color.greenLighter}
            radius={10}
            py="xs"
            px="sm"
            width={120}
            alignItems="center">
            <Text
              color="white"
              bold
              style={{textTransform: 'uppercase'}}
              size={15}>
              Play
            </Text>
          </Box>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPlay}>
          <Box
            backgroundColor={theme.color.greenLighter}
            radius={10}
            py="xs"
            px="sm"
            width={120}
            alignItems="center">
            <Text
              color="white"
              bold
              style={{textTransform: 'uppercase'}}
              size={15}>
              Shuffle
            </Text>
          </Box>
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

export default AlbumHeader;
