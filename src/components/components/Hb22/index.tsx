import React, { useContext } from 'react';
import {
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { Album } from '../../types';
import { Ionicons } from '@expo/vector-icons';
import { AppContext } from '../../AppContext';
export type AlbumProps = {
  album: Album,
}

const song_data = {
  id:'1',
  uri:'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/audio-low/Y2Mate.is - AAM GI SARI  NEW SANTHALI VIDEO SONG 2020-2021-c9oHoSK6HaY-160k-1637471891514.mp3',
  imageUri:'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/imagealbumart/am_gi_sari.webp',
  title:'Am gi sari',
  artist:'Dingra Boyz'

}
const Hb_22 = (props: AlbumProps) => {

  const navigation = useNavigation();
  
  const { setSongId } = useContext(AppContext);

  const onPlay = () => {

    console.log('On Play Clicked',song_data.id);
    setSongId(song_data.id);
  }
  
  return (
    <TouchableOpacity onPress={onPlay} >
      <View style={styles.container}>
          <Image source={{uri: props.album.imageUri}} style={styles.image}/>
          <Text style={styles.text}>{props.album.title}</Text>
          <Ionicons style={styles.three_dot} name="ellipsis-vertical-outline" size={18} color="white" />
      </View>
    </TouchableOpacity>

  )
}

export default Hb_22;
