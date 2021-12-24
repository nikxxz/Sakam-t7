import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, Image, TouchableOpacity} from 'react-native';
import {Box, Text} from 'react-native-design-utility';
import {theme} from '../constants/theme';
import {SearchStackParam, AlbumParam} from '../constants/types';
import Icon from 'react-native-vector-icons/Feather';
import {supabase} from '../supabase/supabaseInit';
import TrackPlayer from 'react-native-track-player';
import {usePlayerContext} from '../contexts/PlayerContext';
import LinearGradient from 'react-native-linear-gradient';

type NavigationParams = RouteProp<SearchStackParam, 'Artist'>;
type NavigationParama = RouteProp<AlbumParam, 'Artist'>;

const {width, height} = Dimensions.get('screen');

const ArtistDetails = () => {
  const {data} = useRoute<NavigationParams>().params ?? {};
  const {song} = useRoute<NavigationParama>().params ?? {};
  const playerContext = usePlayerContext();
  const [asongs, setasongs] = useState();
  const [a, seta] = useState(data ? data.artist : song.artist);

  const navigation = useNavigation();

  useEffect(() => {
    const getArtistSongs = async () => {
      try {
        let {data, error} = await supabase
          .from('Songs1')
          .select('*')
          .ilike('artist', a);

        setasongs(data);
        if (data) {
          setasongs(data);
        } else {
          setasongs([]);
        }
        if (error) {
          console.log(error);
        }
      } catch (e) {
        console.log(e);
      }
    };

    getArtistSongs();
  }, []);

  return (
    <LinearGradient
      colors={['#212121', '#1D263B', '#212121']}
      start={{x: 0.3, y: 0.2}}>
      <Box height={height}>
        <Box pl={width * 0.03} pt={width * 0.05}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={width * 0.06} color="#fff" />
          </TouchableOpacity>
        </Box>
        <FlatList
          ListHeaderComponent={
            <>
              <Box
                dir="row"
                px="sm"
                mt="sm"
                mb="md"
                style={{overflow: 'hidden'}}>
                {/* <Box mr={18}>
                <Image
                  source={{
                    uri: data ? data.artwork : song.artwork,
                  }}
                  style={styles.img}
                />
              </Box> */}
                <Box f={1}>
                  <Text size={width * 0.08} color="white" bold>
                    {data ? data.artist : song.artist}
                  </Text>
                  <Text size={width * 0.035} color="greyLighter">
                    Dumka, Jharkhand
                  </Text>

                  <Box
                    dir="row"
                    justify="evenly"
                    mt={width * 0.08}
                    px={width * 0.035}
                    mb="md">
                    <TouchableOpacity>
                      <Box
                        width={'100%'}
                        dir="row"
                        align="center"
                        justify="center">
                        <Icon
                          name="facebook"
                          size={width * 0.05}
                          color={theme.color.blueLighter}
                        />
                        <Text
                          size={width * 0.035}
                          ml={width * 0.015}
                          color={theme.color.greyLighter}>
                          facebook
                        </Text>
                      </Box>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <Box
                        width={'100%'}
                        dir="row"
                        align="center"
                        justify="center">
                        <Icon
                          name="instagram"
                          size={width * 0.05}
                          color={theme.color.redLight}
                        />
                        <Text
                          size={width * 0.035}
                          ml={width * 0.015}
                          color={theme.color.greyLighter}>
                          instagram
                        </Text>
                      </Box>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <Box
                        width={'100%'}
                        dir="row"
                        align="center"
                        justify="center">
                        <Icon
                          name="twitter"
                          size={width * 0.05}
                          color={theme.color.blueLight}
                        />
                        <Text
                          size={width * 0.035}
                          ml={width * 0.015}
                          color={theme.color.greyLighter}>
                          twitter
                        </Text>
                      </Box>
                    </TouchableOpacity>
                  </Box>
                </Box>
              </Box>
              <Box px="sm" mb="md">
                <Text bold size="lg" color="greyLighter">
                  Songs By {data ? data.artist : song.artist}
                </Text>
              </Box>
            </>
          }
          data={asongs}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={async () => {
                await TrackPlayer.add(asongs, 0);
                if (playerContext.isPlaying) {
                  await TrackPlayer.skip(index);
                } else {
                  await TrackPlayer.skip(index);
                  await TrackPlayer.play();
                }
              }}>
              <Box px="sm" py="sm">
                <Text size="xs" color="#31E981">
                  {item.artist}
                </Text>
                <Text bold color="#E1BB80">
                  {item.title}
                </Text>
              </Box>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </Box>
    </LinearGradient>
  );
};

export default ArtistDetails;
