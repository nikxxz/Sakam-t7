import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {Box, Text} from 'react-native-design-utility';
import {theme} from '../../../constants/theme';

import styles from './styles';

export type AlbumHeaderProps = {
  album: any;
};

const AlbumHeader = (props: AlbumHeaderProps) => {
  const {album} = props;
  const isPlaying = false;
  //console.log(props);

  const onPlay = () => {
    // console.log('Album Song',props.songs)
    //setSong(props.album.songs[0]);
    // console.log(props.songs);
  };

  return (
    <Box f={1} backgroundColor="#191919">
      <View style={styles.creatorContainer}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>{album.title}</Text>
          <Text style={styles.subtitle}>{album.by}</Text>
        </View>

        <Image
          source={{
            uri: album.imageUri,
          }}
          style={styles.image}
        />
      </View>

      <Box f={1} dir="row" justify="evenly" py="md" px="xs">
        <TouchableOpacity onPress={onPlay}>
          <Box
            backgroundColor={theme.color.greenLighter}
            radius={10}
            py="xs"
            px="sm"
            width={120}
            alignItems="center">
            <Text color="white" bold>Play</Text>
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
            <Text color="white" bold>Shuffle</Text>
          </Box>
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

export default AlbumHeader;
