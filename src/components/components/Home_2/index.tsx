import React from 'react';
import {View,  FlatList} from 'react-native';
import {Album} from '../../types';
import styles from './styles';
import AlbumComponent from '../Album';
import Sb_11 from '../Sb_11';
import {Box, Text} from 'react-native-design-utility';

export type AlbumCategoryProps = {
  title: string;
  albums: [Album];
};

const songList = [
  {
    id: '1',
    songs: [
      {
        id: '11',
        title: 'Hor Hor Te',
        imageUri:
          'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/imagealbumart/hor_hor_te.webp',
        artist: 'Tom Murmu',
      },
      {
        id: '12',
        title: 'Dingra Boyz',
        imageUri:
          'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/imagealbumart/dingraBoyz.jpg',
        artist: 'Tom Murmu',
      },
      {
        id: '11',
        title: 'Hor Hor Te',
        imageUri:
          'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/imagealbumart/hor_hor_te.webp',
        artist: 'Tom Murmu',
      },
    ],
  },
  {
    id: '2',
    songs: [
      {
        id: '111',
        title: 'Hor Hor Te',
        imageUri:
          'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/imagealbumart/hor_hor_te.webp',
        artist: 'Tom Murmu',
      },
      {
        id: '122',
        title: 'Dingra Boyz',
        imageUri:
          'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/imagealbumart/dingraBoyz.jpg',
        artist: 'Tom Murmu',
      },
      {
        id: '133',
        title: 'Hor Hor Te',
        imageUri:
          'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/imagealbumart/hor_hor_te.webp',
        artist: 'Tom Murmu',
      },
    ],
  },
];
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
