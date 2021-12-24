import React from 'react';
import {Dimensions, Image, TouchableOpacity} from 'react-native';
import {Box, Text} from 'react-native-design-utility';
import TrackPlayer from 'react-native-track-player';
import {usePlayerContext} from '../../contexts/PlayerContext';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const {width} = Dimensions.get('screen');

export type AlbumHeaderProps = {
  album: any;
};

const AlbumHeader = (props: any) => {
  const {album} = props;
  const playerContext = usePlayerContext();

  const onPlay = async () => {
    await TrackPlayer.add(props.tracks, 0);
    if (playerContext.isPlaying) {
      await TrackPlayer.skip(0);
    } else {
      await TrackPlayer.skip(0);
      await TrackPlayer.play();
    }
  };

  return (
    <Box f={1} pt={width * 0.05} mb={width * 0.075}>
      <Box>
        <Box>
          <Text color="#E1BB80" size={width * 0.06} bold center>
            {album.title}
          </Text>
          <Text color="grey" size="sm" center>
            {album.by}
          </Text>
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

      <Box f={1} dir="row" justify="evenly" mt={40} px="xs">
        <TouchableOpacity onPress={onPlay}>
          <Box
            backgroundColor="#3EFF8B"
            radius={10}
            py={width * 0.015}
            width={width * 0.3}
            alignItems="center">
            <Icon name="play-outline" color="#1D263B" size={width * 0.06} />
          </Box>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPlay}>
          <Box
            backgroundColor="#3EFF8B"
            radius={10}
            py={width * 0.015}
            width={width * 0.3}
            alignItems="center">
            <Icon name="shuffle" color="#1D263B" size={width * 0.06} />
          </Box>
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

export default AlbumHeader;
