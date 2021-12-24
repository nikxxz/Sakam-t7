import React from 'react';
import {View, FlatList} from 'react-native';
import {Album} from '../../types';
import styles from './styles';
import {Text} from 'react-native-design-utility';
import Artist_Home from '../artist_home';

export type AlbumCategoryProps = {
  title: string;
  albums: [Album];
};

const Home_2 = (props: AlbumCategoryProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <FlatList
        data={props.albums}
        renderItem={({item}) => <Artist_Home album={item} />}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
};

export default Home_2;
