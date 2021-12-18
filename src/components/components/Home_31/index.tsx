import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
// import {Ionicons} from 'ionicons';
// import { AppContext } from '../../AppContext';
export type AlbumProps = {
  song:any,
  listsong:any
}

// const song_data = {
//   id:'1',
//   uri:'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/audio-low/Y2Mate.is - AAM GI SARI  NEW SANTHALI VIDEO SONG 2020-2021-c9oHoSK6HaY-160k-1637471891514.mp3',
//   imageUri:'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/imagealbumart/am_gi_sari.webp',
//   title:'Am gi sari',
//   artist:'Dingra Boyz'

// }

const Home_31 = (props: AlbumProps) => {
  //const { setSong } = useContext(AppContext);
  const [song1 , setSong] = useState()
  const onPlay = () => {
    setSong(props.song);
    
   // console.log(props.songs);
  }
  
  useEffect(() => {
    //setListSong(songlist_1);
  }, [])


  return (
    <TouchableOpacity onPress={onPlay} >
      <View style={styles.container}>
           {/* <Text style={styles.index}>{index}.</Text> */}
          <Image source={{uri: props.song.imageUri}} style={styles.image}/>
          <Text style={styles.text}>{props.song.title}</Text>
          {/* <Ionicons style={styles.three_dot} name="ellipsis-vertical-outline" size={18} color="white" /> */}
      </View>
    </TouchableOpacity>

  )
}

export default Home_31;
