import React, { useContext, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Album } from "../../types";
import styles from './styles';
import AlbumComponent from "../Album";
import Home_11 from '../Home_11';
import AlbumHeader from '../AlbumHeader';
import Album_12 from '../Album_12';
import Home_31 from '../Home_31';
import Album_11 from '../Album_11';
import { AppContext } from '../../AppContext';

export type AlbumCategoryProps = {
  title: string,
  albums: any,
  albumart:string
}



const Album_1 = (props: AlbumCategoryProps) =>{ 
  //console.log(props);

  const { setListSong } = useContext(AppContext);
  useEffect(() => {      
      setListSong(props.album.songs)
  }, [])

  return (
  <View style={styles.container}>
    {/* <Text style={styles.title}>{props.title}</Text> */}
    <FlatList
      data={props.album.songs}
      renderItem={({ item , index }) => <Album_11 index={index + 1} song={item} />}
      keyExtractor={( item ) => item.id}
      showsHorizontalScrollIndicator={false}
      ListHeaderComponent={() => <Album_12  album={props.album} />}
      
    />
  </View>
)
}

export default Album_1;
