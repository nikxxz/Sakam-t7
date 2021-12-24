import React from 'react';
import {Image, TouchableOpacity, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Box, Text} from 'react-native-design-utility';
import TrackPlayer from 'react-native-track-player';
import {usePlayerContext} from '../../contexts/PlayerContext';
import {theme} from '../../constants/theme';

const {width} = Dimensions.get('screen');

export type AlbumProps = {
  songs: any;
};

const SearchModal11 = (props: any) => {
  const {song, index, tracks} = {...props};
  const playerContext = usePlayerContext();
  const navigation = useNavigation();

  return (
    <Box h={90} dir="row" align="center" px="sm" pt={5}>
      <TouchableOpacity
        onPress={async () => {
          await TrackPlayer.add(tracks, 0);
          if (playerContext.isPlaying) {
            await TrackPlayer.skip(index - 1);
          } else {
            await TrackPlayer.skip(index - 1);
            await TrackPlayer.play(0);
          }
        }}>
        <Box dir="row">
          <Box f={1} height={width * 0.1}>
            <Box
              h={width * 0.15}
              w={width * 0.15}
              radius={width * 0.025}
              mr={width * 0.025}
              style={{overflow: 'hidden'}}>
              <Image
                source={{uri: song.artwork, height: '100%', width: '100%'}}
              />
            </Box>
          </Box>
          <Box f={3} height={width * 0.15} py={width * 0.02}>
            <Box f={1} width={width} ml={width * 0.175}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ArtistScreen', {data: song})
                }>
                <Text size={width * 0.03} color={theme.color.greenLighter}>
                  {song.artist}
                </Text>
              </TouchableOpacity>
              <Text
                bold
                color="#E1BB80"
                size={width * 0.035}
                mt={width * 0.005}>
                {song.title}
              </Text>
            </Box>
          </Box>
        </Box>
      </TouchableOpacity>
    </Box>
  );
};

export default SearchModal11;
