import React from 'react';
import {View,  FlatList} from 'react-native';
import {Album} from '../../types';
import styles from './styles';
import Home_11 from '../Home_11';
import {Box, Text} from 'react-native-design-utility';

export type AlbumCategoryProps = {
  title: string;
  albums: [Album];
};

const Home_1 = (props: AlbumCategoryProps) => {
  console.log(props);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <FlatList
        data={props.albums}
        renderItem={({item}) => <Home_11 album={item} />}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
};

export default Home_1;
