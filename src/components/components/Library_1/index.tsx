import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Album } from "../../types";
import styles from './styles';
import AlbumComponent from "../Album";

export type AlbumCategoryProps = {
  title: string,
  albums: [Album],
}

const Lirary_1 = (props: AlbumCategoryProps) =>{ 
  //console.log(props);

  return (
  <View style={styles.container}>
    <Text style={styles.title}>{props.title}</Text>
    <FlatList
      data={props.albums}
      renderItem={({ item }) => <AlbumComponent album={item} />}
      keyExtractor={( item ) => item.id}
      showsHorizontalScrollIndicator={false}
      horizontal
    />
  </View>
)
}

export default Lirary_1;