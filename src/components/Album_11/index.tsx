import React from 'react';
import {Dimensions, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Text, Box} from 'react-native-design-utility';
import TrackPlayer from 'react-native-track-player';
import {theme} from '../../constants/theme';
import {usePlayerContext} from '../../contexts/PlayerContext';

const {width} = Dimensions.get('screen');

export type AlbumProps = {
  song: any;
};
const Album_11 = (props: any) => {
  const navigation = useNavigation();
  const {song, index} = props;
  const playerContext = usePlayerContext();
  return (
    <Box h={width * 0.2} dir="row" align="center" px="sm" justify="start">
      <TouchableOpacity
        onPress={async () => {
          await TrackPlayer.add(props.tracks, 0);
          if (playerContext.isPlaying) {
            await TrackPlayer.skip(index - 1);
          } else {
            await TrackPlayer.skip(index - 1);
            await TrackPlayer.play();
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
              <Text bold color="#E1BB80" size={width * 0.035}>
                {song.title}
              </Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ArtistScreen', {data: song})
                }>
                <Text
                  size={width * 0.03}
                  color={theme.color.greenLighter}
                  mt={width * 0.01}>
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

export default Album_11;
