import React, {useEffect} from 'react';
import {View, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import IIcon from 'react-native-vector-icons/Ionicons';
import {usePlayerContext} from '../contexts/PlayerContext';

export default function Controller({next, prev}) {
  const {width} = Dimensions.get('screen');
  const playerContext = usePlayerContext();

  useEffect(() => {}, [playerContext]);

  const pause = async () => {
    await TrackPlayer.pause();
  };

  const play = async () => {
    await TrackPlayer.play();
  };

  // const next = async () => {
  //   await TrackPlayer.skipToNext();
  // };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={prev}>
        <IIcon
          name="ios-play-skip-back-outline"
          size={width * 0.085}
          color="#C6D57E"
        />
      </TouchableOpacity>

      {playerContext.isPlaying ? (
        // <Text color="white">Playing</Text>
        <TouchableOpacity onPress={pause}>
          <IIcon
            name="ios-pause-circle-outline"
            size={width * 0.25}
            color="#C6D57E"
          />
        </TouchableOpacity>
      ) : (
        //
        <TouchableOpacity onPress={play}>
          <IIcon
            name="ios-play-circle-outline"
            size={width * 0.25}
            color="#C6D57E"
          />
        </TouchableOpacity>
      )}

      {/* <TouchableOpacity onPress={TrackPlayer.play()}>
        <Icon name="pause-circle-outline" size={100} color={'#fff'} />
      </TouchableOpacity> */}

      <TouchableOpacity onPress={next}>
        <IIcon
          name="ios-play-skip-forward-outline"
          size={width * 0.085}
          color="#C6D57E"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
