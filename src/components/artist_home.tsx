import React from 'react';
import {View, Image, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Text} from 'react-native-design-utility';

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
    width: 150,
    marginHorizontal: 15,
    marginVertical: 15,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 150,
  },
  text: {
    textAlign: 'center',
    color: 'grey',
    textTransform: 'capitalize',
    marginTop: 10,
  },
});
