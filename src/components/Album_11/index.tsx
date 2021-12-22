import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Text, Box} from 'react-native-design-utility';
import TrackPlayer from 'react-native-track-player';
import {theme} from '../../constants/theme';
import {usePlayerContext} from '../../contexts/PlayerContext';

export type AlbumProps = {
  song: any;
};
const Album_11 = (props: any) => {
  const navigation = useNavigation();
  const {song, index} = props;
  const playerContext = usePlayerContext();
  return (
    <Box h={90} dir="row" align="center" px="sm">
      <TouchableOpacity
        onPress={async () => {
          //await TrackPlayer.reset()
          //console.log(tracks)
          //await TrackPlayer.add(tracks)
          await TrackPlayer.add(props.tracks, 0);
          if (playerContext.isPlaying) {
            await TrackPlayer.skip(index - 1);
          } else {
            await TrackPlayer.skip(index - 1);
            await TrackPlayer.play();
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
              <Text bold color="white" size="md" my={3}>
                {song.title}
              </Text>
              {/* <Text size="xs" color="greyLightest">
                Album
              </Text> */}
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ArtistScreen', {data: song})
                }>
                <Text size="sm" color={theme.color.greenLighter} mt={3}>
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
