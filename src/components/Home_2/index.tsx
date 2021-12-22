import React from 'react';
import {View, FlatList} from 'react-native';
import {Album} from '../../types';
import styles from './styles';
import Sb_11 from '../Sb_11';
import {Text} from 'react-native-design-utility';

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
        renderItem={({item}) => {
          return (
            <View style={styles.container_Sb_11}>
              <Sb_11 album={item} />
              <Sb_11 album={item} />
              <Sb_11 album={item} />
            </View>
          );
        }}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
};

export default Home_2;
