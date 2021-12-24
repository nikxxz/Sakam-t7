import React, {useEffect} from 'react';
import {View, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import {Box} from 'react-native-design-utility';
import TrackPlayer from 'react-native-track-player';
import IIcon from 'react-native-vector-icons/Ionicons';
import {usePlayerContext} from '../contexts/PlayerContext';

const {width} = Dimensions.get('screen');

export default function Controller({next, prev}) {
  const playerContext = usePlayerContext();

  useEffect(() => {}, [playerContext]);

  const pause = async () => {
    await TrackPlayer.pause();
  };

  const play = async () => {
    await TrackPlayer.play();
  };

  return (
    <View style={styles.container}>
      <Box pr={width * 0.1}>
        <TouchableOpacity onPress={prev}>
          <IIcon
            name="ios-play-skip-back-outline"
            size={width * 0.1}
            color="#3EFF8B"
          />
        </TouchableOpacity>
      </Box>

      <Box>
        {playerContext.isPlaying ? (
          <TouchableOpacity onPress={pause}>
            <IIcon
              name="ios-pause-circle-outline"
              size={width * 0.3}
              color="#31E981"
            />
          </TouchableOpacity>
        ) : (
          //
          <TouchableOpacity onPress={play}>
            <IIcon
              name="ios-play-circle-outline"
              size={width * 0.3}
              color="#3EFF8B"
            />
          </TouchableOpacity>
        )}
      </Box>

      <Box pl={width * 0.08}>
        <TouchableOpacity onPress={next}>
          <IIcon
            name="ios-play-skip-forward-outline"
            size={width * 0.1}
            color="#3EFF8B"
          />
        </TouchableOpacity>
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
