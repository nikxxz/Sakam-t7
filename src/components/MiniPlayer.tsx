import React, {useEffect, useState} from 'react';
import {Box, Text} from 'react-native-design-utility';
import {usePlayerContext} from '../contexts/PlayerContext';
import Icon from 'react-native-vector-icons/Feather';
import {Image, TouchableOpacity} from 'react-native';
import {theme} from '../constants/theme';
import TrackPlayer, {State} from 'react-native-track-player';
import {useNavigation} from '@react-navigation/native';
import {SharedElement} from 'react-navigation-shared-element';

const MiniPlayer = () => {
  const playerContext = usePlayerContext();
  const [artwor, setArtwork] = useState('');
  const navigation = useNavigation();

  const artwork = async () => {
    const index = await TrackPlayer.getCurrentTrack();
    const art = await TrackPlayer.getTrack(index);
    setArtwork(art);
  };

  if (playerContext.isPlaying) {
    artwork();
  }

  if (
    playerContext.isEmpty ||
    playerContext.isStopped ||
    playerContext.isReady
    
  ) {
    return null;
  }
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Player', {data: artwor});
      }}
      activeOpacity={1}>
      <Box h={75} bg="#080707" px="sm">
        <Box f={1} dir="row" align="center" justify="between">
          <SharedElement id={'player'}>
            <Box h={50} w={50} radius={10} style={{overflow: 'hidden'}}>
              <Image
                source={{uri: artwor.artwork, height: '100%', width: '100%'}}
                style={{flex: 1}}
              />
            </Box>
          </SharedElement>

          <Box f={1} mr={20} ml={20}>
            <Text color="greenLighter" size={14}>
              {artwor.title}
            </Text>
            <Text color="white" size={10}>
              {artwor.artist}
            </Text>
          </Box>

          <Box mr="sm">
            {playerContext.isPaused && (
              <TouchableOpacity onPress={() => TrackPlayer.play()}>
                <Icon name="play" size={30} color={theme.color.greenLighter} />
              </TouchableOpacity>
            )}

            {playerContext.isPlaying && (
              <TouchableOpacity onPress={() => TrackPlayer.pause()}>
                <Icon name="pause" size={30} color={theme.color.greenLighter} />
              </TouchableOpacity>
            )}

            {(playerContext.isStopped ) && (//|| playerContext.isEmpty
              <TouchableOpacity onPress={() => {}}>
                <Icon name="play" size={30} color={theme.color.greenLighter} />
              </TouchableOpacity>
            )}
          </Box>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

export default MiniPlayer;
