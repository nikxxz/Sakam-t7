import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Text} from 'react-native-design-utility';

const {width} = Dimensions.get('screen');

export type AlbumProps = {
  album: Album;
};

const Artist_Home = (props: any) => {
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

export default Artist_Home;

const styles = StyleSheet.create({
  container: {
    width: width * 0.35,
    marginHorizontal: width * 0.035,
    marginVertical: width * 0.035,
  },
  image: {
    width: '100%',
    height: width * 0.35,
    borderRadius: width * 0.35,
  },
  text: {
    textAlign: 'center',
    color: '#AAA9A9',
    textTransform: 'capitalize',
    marginTop: 10,
  },
});
