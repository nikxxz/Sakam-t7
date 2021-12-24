import React, {useEffect, useState} from 'react';
import {Box, Text} from 'react-native-design-utility';
import TrackPlayer, {useProgress} from 'react-native-track-player';
import Controller from '../components/Controller';
import SliderComp from '../components/SliderComp';
import LoadingScreen from '../components/LoadingScreen';
import {
  Dimensions,
  Image,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const Player = () => {
  const {width} = Dimensions.get('screen');
  const [loading, setLoading] = useState(true);
  const [song, setSong] = useState<any>();
  const {position} = useProgress();
  const [event, setEvent] = useState(false);
  const navigation = useNavigation();

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

  if (loading) {
    return <LoadingScreen />;
  } else if (song === undefined) {
    navigation.navigate('Tabs');
  }

  return (
    <LinearGradient
      colors={['#212121', '#1D263B', '#212121']}
      start={{x: 0.4, y: 0.05}}
      style={styles.gradient}>
      <Box f={1}>
        <Box pt={width * 0.025} pl={width * 0.025} dir="row" justify="between">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-down" color="white" size={width * 0.075} />
          </TouchableOpacity>
          <Box pr={width * 0.1} align="end">
            <Text color="#fff" size={width * 0.06} bold>
              {song.title}
            </Text>
            <Text color="greenLighter" size={width * 0.04}>
              {song.artist}
            </Text>
          </Box>
        </Box>
        <Box f={7} justify="center" mt={width * 0.05}>
          <Box height={width * 0.95} width={width * 0.95} alignSelf="center">
            <Image
              source={{uri: song.artwork, height: '100%', width: '100%'}}
              resizeMode="cover"
            />
          </Box>
        </Box>
        <Box f={5} pt={10}>
          <Box f={1} width="100%" justify="center">
            <SliderComp event={event} />
          </Box>
          <Box f={3}>
            <Controller next={next} prev={prev} />
          </Box>
        </Box>
      </Box>
    </LinearGradient>
  );
};

export default Player;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
});
