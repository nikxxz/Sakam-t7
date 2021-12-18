import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';
import TrackPlayer from 'react-native-track-player';

export default SliderComp = ({event}) => {
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);
  const [sliding, setSliding] = useState(false);

  useEffect(() => {
    if (!sliding) {
      time();
    }
  }, [position, event]);

  const time = async () => {
    const d = await TrackPlayer.getDuration();
    const p = await TrackPlayer.getPosition();
    setDuration(d);
    setPosition(p);
  };

  return (
    <View style={styles.sliderContainer}>
      <Slider
        style={{width: '100%', height: 20}}
        minimumValue={0}
        maximumValue={duration}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#fff"
        onSlidingStart={() => {
          setSliding(true);
        }}
        onSlidingComplete={v => {
          setSliding(false);
          TrackPlayer.seekTo(v);
          setPosition(v);
        }}
        onValueChange={v => setPosition(v)}
        value={sliding ? undefined : position}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    paddingHorizontal: '3%',
    marginBottom: '5%',
  },
});
