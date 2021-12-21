import React, {useEffect, useState} from 'react';
import {Box, Text} from 'react-native-design-utility';
import TrackPlayer, {State, Event} from 'react-native-track-player';
import Controller from '../components/Controller';
import SliderComp from '../components/SliderComp';
import LoadingScreen from '../components/LoadingScreen';
import {Image, ToastAndroid} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';

const Player = () => {
  const [isSeeking, setIsSeeking] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const [paused, setPaused] = useState(true);
  const [loading, setLoading] = useState(true);
  const [song, setSong] = useState<any>();

  const [event, setEvent] = useState(false);

  useEffect(() => {
    const yy = async () => {
      const i = await TrackPlayer.getCurrentTrack();
      const t = await TrackPlayer.getTrack(i);
      setSong(t);
      setLoading(false);
    };
    yy();
  }, [song]);

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

  // ....................................................................

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Box backgroundColor="#" f={1}>
      <Box f={7} backgroundColor="#191919" align="center" justify="center">
        <Box backgroundColor="green" height={300} width={300}>
          <SharedElement id="player">
            <Image
              source={{uri: song.artwork, height: '100%', width: '100%'}}
            />
          </SharedElement>
        </Box>
        <Box justify="center" align="center">
          <Text color="white" size="xl" mt="lg">
            {song.title}
          </Text>
          <Text color="white" size="sm">
            {song.artist}
          </Text>
        </Box>
      </Box>
      <Box f={5} backgroundColor="#191919">
        <Box
          f={2}
          width="100%"
          height={100}
          backgroundColor="#191919"
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
