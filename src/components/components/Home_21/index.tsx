import React from 'react';
import {
  View,
  Image,  
  TouchableWithoutFeedback,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { Album } from '../../types';
import {Box, Text} from 'react-native-design-utility';

export type AlbumProps = {
  album: Album,
}

const Home_21 = (props: AlbumProps) => {

  const navigation = useNavigation();
  
  
  const onPress = () => {
    navigation.navigate('AlbumScreen', { id: props.album.id })
  }

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
          <Image source={{uri: props.album.imageUri}} style={styles.image}/>
          <Text style={styles.text}>{props.album.artistsHeadline}</Text>
      </View>
    </TouchableWithoutFeedback>

  )
}

export default Home_21;
