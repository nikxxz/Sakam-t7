import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import TrackPlayer, {State} from 'react-native-track-player';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Controller({next, prev}) {
  const [isPlaying, setIsPlaying] = useState(true);

  const pause = async () => {
    await TrackPlayer.pause();
    setIsPlaying(false);
  };

  const play = async () => {
    await TrackPlayer.play();
    setIsPlaying(true);
  };

  // const next = async () => {
  //   await TrackPlayer.skipToNext();
  // };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={prev}>
        <Icon name="skip-backward-outline" size={40} color={'#fff'} />
      </TouchableOpacity>

      {isPlaying ? (
        // <Text color="white">Playing</Text>
        <TouchableOpacity onPress={pause}>
          <Icon name="pause-circle-outline" size={100} color={'#fff'} />
        </TouchableOpacity>
      ) : (
        //
        <TouchableOpacity onPress={play}>
          <Icon name="play-circle-outline" size={100} color={'#fff'} />
        </TouchableOpacity>
      )}

      {/* <TouchableOpacity onPress={TrackPlayer.play()}>
        <Icon name="pause-circle-outline" size={100} color={'#fff'} />
      </TouchableOpacity> */}

      <TouchableOpacity onPress={next}>
        <Icon name="skip-forward-outline" size={40} color={'#fff'} />
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
