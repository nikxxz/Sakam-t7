import React, {useEffect, useState} from 'react';
import {useProgress} from 'react-native-track-player';
import Slider from '@react-native-community/slider';
import TrackPlayer from 'react-native-track-player';
import {Box, Text} from 'react-native-design-utility';
import { theme } from '../constants/theme';

const SliderComp = ({event}) => {
  // const [duration, setDuration] = useState(0);
  const [pos, setPos] = useState(0);
  const [sliding, setSliding] = useState(false);
  const {position, duration} = useProgress();

  useEffect(() => {
    if (!sliding) {
      trackDetails();
    }
  }, [position, event, sliding]);

  const trackDetails = async () => {
    const p = await TrackPlayer.getPosition();
    setPos(p);
  };

  const time = (totalSeconds: number): string => {
    const hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);

    const minutesStr = String(minutes).padStart(2, '0');
    const secondsStr = String(seconds).padStart(2, '0');

    if (hours > 0) {
      return `${hours}:${minutesStr}:${secondsStr}`;
    }
    return `${minutesStr}:${secondsStr}`;
  };

  return (
    <>
      <Slider
        style={{width: '100%', height: 20}}
        minimumValue={0}
        maximumValue={duration}
        minimumTrackTintColor="#D9CAB3"
        maximumTrackTintColor={theme.color.greyLight}
        thumbTintColor="#C6D57E"
        onSlidingStart={() => {
          setSliding(true);
        }}
        onSlidingComplete={v => {
          setSliding(false);
          TrackPlayer.seekTo(v);
          setPos(v);
        }}
        onValueChange={v => setPos(v)}
        value={sliding ? undefined : pos}
      />
      <Box dir="row" align="center" justify="between" px={15} py={5}>
        <Text color="#CDF2CA">{time(position)}</Text>
        <Text color="#CDF2CA">{time(duration)}</Text>
      </Box>
    </>
  );
};

export default SliderComp;
