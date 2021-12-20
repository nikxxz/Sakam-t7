import React from 'react';
import {View, Image, Text, TouchableWithoutFeedback} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {Album} from '../../types';

export type AlbumProps = {
  album: Album;
};

const Home_11 = (props: any) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('AlbumScreen', {id: props.album.playlist_id});
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image source={{uri: props.album.artwork}} style={styles.image} />
        <Text style={styles.text}>{props.album.title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Home_11;
