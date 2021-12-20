import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {Box, Text} from 'react-native-design-utility';
import TrackPlayer from 'react-native-track-player';
import {theme} from '../../../constants/theme';
import { usePlayerContext } from '../../../contexts/PlayerContext';

import styles from './styles';

export type AlbumHeaderProps = {
  album: any;
};

const AlbumHeader = (props: AlbumHeaderProps) => {
  const {album} = props;
  const isPlaying = false;
  //console.log(props);
  const playerContext = usePlayerContext();

  const onPlay = async() => {
    console.log('PLAY SONGS CLICKED')
    if(playerContext.isPlaying){
      await TrackPlayer.skip(0)
      
    }else{
      await TrackPlayer.skip(0)
      await TrackPlayer.play()
    }
    
  };

  return (
    <Box f={1} backgroundColor="#191919" pt={10} paddingHorizontal={10}>
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
