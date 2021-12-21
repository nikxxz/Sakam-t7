import React from 'react';
import {Image, TouchableOpacity, Keyboard, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Box, Text} from 'react-native-design-utility';
import TrackPlayer, {State} from 'react-native-track-player';
import {usePlayerContext} from '../../../contexts/PlayerContext';
import {theme} from '../../../constants/theme';
export type AlbumProps = {
  songs: any;
};

const SearchModal11 = (props: any) => {
  const {song, index, tracks} = {...props};
  const playerContext = usePlayerContext();
  const navigation = useNavigation();
  const onPlay = () => {
    Keyboard.dismiss();
  };

  return (
    <Box h={90} dir="row" align="center" px="sm">
      <TouchableOpacity
        onPress={async () => {
          //await TrackPlayer.reset()
          //console.log(tracks)
          await TrackPlayer.add(tracks, 0);
          if (playerContext.isPlaying) {
            await TrackPlayer.skip(index - 1);
          } else {
            await TrackPlayer.skip(index - 1);
            await TrackPlayer.play(0);
          }
          // onPlay();
        }}>
        <Box dir="row">
          <Box f={1} height={100}>
            <Box
              h={70}
              w={70}
              bg="blueLight"
              radius={10}
              mr={10}
              style={{overflow: 'hidden'}}>
              <Image
                source={{uri: song.artwork, height: '100%', width: '100%'}}
              />
            </Box>
          </Box>
          <Box f={3} height={100}>
            <Box f={1} width={200} ml={85}>
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
        </Box>
      </TouchableOpacity>
    </Box>
  );
};

export default SearchModal11;
