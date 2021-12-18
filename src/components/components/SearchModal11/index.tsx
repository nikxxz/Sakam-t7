import React, { useContext, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { Album } from '../../types';
import { Ionicons } from '@expo/vector-icons';
import { AppContext } from '../../AppContext';
export type AlbumProps = {
  songs:any
}




const SearchModal11 = (props: any) => {
  const {song , index}  = {...props}
  const { setSong } = useContext(AppContext);

  //console.log(props);
  const onPlay = () => {
    Keyboard.dismiss()
    console.log('Current Song** \n',song)
    setSong(song);
    
   // console.log(props.songs);
  }
  
  // useEffect(() => {
  //   //setListSong(songs);
  //   //console.log("This song is \n")
  //  // console.log(song)
  // }, [])


  return (
    <TouchableOpacity onPress={onPlay} >
      <View style={styles.container}>
           <Text style={styles.id}>{index}.</Text>
          <Image source={{uri: song.imageUri}} style={styles.image}/>
          <View style={styles.containerTitle}>
          <Text style={styles.text}>{song.title}</Text>
          <Text style={styles.artist}>{song.artist}</Text>
          </View>
          
          <Ionicons style={styles.three_dot} name="ellipsis-vertical-outline" size={18} color="white" />
      </View>
    </TouchableOpacity>

  )
}

export default SearchModal11;
