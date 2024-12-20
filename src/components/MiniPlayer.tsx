import React, {useState} from 'react';
import {Box, Text} from 'react-native-design-utility';
import {usePlayerContext} from '../contexts/PlayerContext';
import Icon from 'react-native-vector-icons/Feather';
import {ActivityIndicator, Image, TouchableOpacity} from 'react-native';
import {theme} from '../constants/theme';
import TrackPlayer from 'react-native-track-player';
import {useNavigation} from '@react-navigation/native';

const MiniPlayer = () => {
  const playerContext = usePlayerContext();
  const [artwor, setArtwork] = useState('');
  const [play, setPlay] = useState(false);
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
    (playerContext.isEmpty ||
      playerContext.isStopped ||
      playerContext.isReady) &&
    playerContext.isPlaying === false &&
    playerContext.isPaused === false
  ) {
    // console.log(playerContext.isEmpty)
    // console.log(playerContext.isStopped)
    // console.log(playerContext.isReady)
    return null;
  }
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Player');
      }}
      activeOpacity={1}>
      <Box h={65} bg="#000" px="sm" opacity={0.8}>
        <Box f={1} dir="row" align="center" justify="between">
          <Box h={50} w={50} radius={10} style={{overflow: 'hidden'}}>
            <Image
              source={{uri: artwor.artwork, height: '100%', width: '100%'}}
              style={{flex: 1}}
            />
          </Box>

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
              <TouchableOpacity
                onPress={() => {
                  TrackPlayer.play();
                  setPlay(true);
                }}>
                <Icon name="play" size={30} color={theme.color.greenLighter} />
              </TouchableOpacity>
            )}

            {playerContext.isPlaying && (
              <TouchableOpacity
                onPress={() => {
                  TrackPlayer.pause();
                  setPlay(false);
                }}>
                <Icon name="pause" size={30} color={theme.color.greenLighter} />
              </TouchableOpacity>
            )}

            {playerContext.isStopped && (
              <TouchableOpacity onPress={() => {}}>
                <Icon name="play" size={30} color={theme.color.greenLighter} />
              </TouchableOpacity>
            )}

            {(playerContext.isBuffering || playerContext.isConnecting) && (
              <ActivityIndicator color="greenLighter" />
            )}
          </Box>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

export default MiniPlayer;
