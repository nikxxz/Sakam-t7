import React, {useEffect, useState} from 'react';
import {Box, Text} from 'react-native-design-utility';
import TrackPlayer, {useProgress} from 'react-native-track-player';
import Controller from '../components/Controller';
import SliderComp from '../components/SliderComp';
import LoadingScreen from '../components/LoadingScreen';
import {Dimensions, Image, ToastAndroid} from 'react-native';

const Player = () => {
  const {width} = Dimensions.get('screen');
  const [loading, setLoading] = useState(true);
  const [song, setSong] = useState<any>();
  const {position} = useProgress();
  const [event, setEvent] = useState(false);

  useEffect(() => {
    const yy = async () => {
      const i = await TrackPlayer.getCurrentTrack();
      const t = await TrackPlayer.getTrack(i);
      setSong(t);
      setLoading(false);
    };
    yy();
  }, [event, position]);

  const next = async () => {
    try {
      await TrackPlayer.skipToNext();
    } catch (e) {
      ToastAndroid.showWithGravityAndOffset(
        'No next tracks',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    }

    setEvent(!event);
  };

  const prev = async () => {
    try {
      await TrackPlayer.skipToPrevious();
    } catch (e) {
      ToastAndroid.showWithGravityAndOffset(
        'No previous tracks',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    }
    setEvent(!event);
  };

  // const pause = async () => {
  //   await TrackPlayer.pause();
  //   setIsPlaying(false);
  // };

  // const play = async () => {
  //   await TrackPlayer.play();
  //   setIsPlaying(true);
  // };

  // ....................................................................

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Box backgroundColor="#" f={1}>
      <Box f={7} backgroundColor="#000" justify="center" pt={30}>
        <Box justify="start" align="start" pb={20} pl={20}>
          <Text color="#fff" size={26} mt={60}>
            {song.title}
          </Text>
          <Text color="greenLighter" size={20}>
            {song.artist}
          </Text>
        </Box>
        <Box height={width * 0.95} width={width * 0.95} alignSelf="center">
          <Image
            source={{uri: song.artwork, height: '100%', width: '100%'}}
            resizeMode="cover"
          />
        </Box>
      </Box>
      <Box f={5} backgroundColor="#000">
        <Box
          f={2}
          width="100%"
          height={100}
          backgroundColor="#000"
          justify="center">
          <SliderComp event={event} />
        </Box>
        <Box f={3}>
          <Controller next={next} prev={prev} />
        </Box>
      </Box>
    </Box>
  );
};

export default Player;
