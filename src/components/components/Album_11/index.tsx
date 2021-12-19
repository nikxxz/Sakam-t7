import React, { useContext, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export type AlbumProps = {
  song:any
}

// const song_data = {
//   id:'1',
//   uri:'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/audio-low/Y2Mate.is - AAM GI SARI  NEW SANTHALI VIDEO SONG 2020-2021-c9oHoSK6HaY-160k-1637471891514.mp3',
//   imageUri:'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/imagealbumart/am_gi_sari.webp',
//   title:'Am gi sari',
//   artist:'Dingra Boyz'

// }

const songlist_1 = [ {
  id: "11",
  title: "Sari Sari Aam ",
  uri:'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/audio-low/Y2Mate.is - Sari Sari Aam-zwehf--Nwe8-160k-1637598704911.mp3',
  imageUri:
    "https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/imagealbumart/sare_sare_aam.jpg",
  artist: "Shivendra Murmu",
  
},
{
  id:'12',
  title:'Inren Gati',
  uri:'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/audio-low/Inren Gaati - Lyrical _ Tom Murmu-TKBAP1IOdDg.webm',
  imageUri:'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/imagealbumart/inren_gati.jpg',
  artist:'Tom Murmu'
},
{
  id:'13',
  title:'Toke Chahe Re Dil',
  uri:'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/audio-low/Y2Mate.is - Toke Chahe Re Dil  A Violent Love Story  Nagpuri Song Priyanka Kishore-Ashish Tigga-Vivek Nayak-7dmPrhxt4no-160k-1637599107504.mp3',
  imageUri:'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/imagealbumart/toke_chahe_re_dil.jpg',
  artist:'Vivek Nayak'
},
{
  id:'14',
  title:'Dular Baha',
  uri:"https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/audio-low/Dular Baha _ Cak' Cando  _ Santhali Song  _ Shiva Music Hamar Jharkhand-7u_loVLA3-g.webm",
  imageUri:'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/imagealbumart/dingraBoyz.jpg',
  artist:'Cak cando'
},
{
  id:'15',
  title:'Am Gi Sari',
  uri:'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/audio-low/Y2Mate.is - AAM GI SARI  NEW SANTHALI VIDEO SONG 2020-2021-c9oHoSK6HaY-160k-1637471891514.mp3',
  imageUri:'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/imagealbumart/am_gi_sari.webp',
  artist:'Dingra Boyz'
},
{
  id:'16',
  title:'Khojo Na Mai guya',
  uri:'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/audio-low/Y2Mate.is - KHOJO NA MOI GUIYA GUIYA RE-iaiZD4jVjt0-160k-1637599329232.mp3',
  imageUri:'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/imagealbumart/khojo_na_mai_guya_guya_re.jpg',
  artist:'Morning Star'
},
{
  id:'17',
  title:'Kan kar Bali',
  uri:'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/audio-low/Y2Mate.is - Kaan Kar Baali-BXAUqQ3pirk-160k-1637599034083.mp3',
  imageUri:'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/imagealbumart/Kan_kar_bali.jpg',
  artist:'Tom Murmu'
},
{
  id:'18',
  title:'Hor Hor Te',
  uri:'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/audio-low/HOR HOR TE - Tom Murmu.webm',
  imageUri:'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/imagealbumart/hor_hor_te.webp',
  artist:'Tom Murmu'
},]
const Album_11 = (props: any) => {
  const navigation = useNavigation();  
  // const { setSong  } = useContext(AppContext);

 // console.log(props);
  const onPlay = () => {
   // console.log('Album Song',props.songs)
    // setSong(props.song);
    
   // console.log(props.songs);
  }
  
  // useEffect(() => {
  //   setListSong(songlist_1);
  // }, [])


  return (
    <TouchableOpacity onPress={onPlay} >
      <View style={styles.container}>
           <Text style={styles.id}>{props.index}.</Text>
          <Image source={{uri: props.song.imageUri}} style={styles.image}/>
          <View style={styles.containerTitle}>
          <Text style={styles.text}>{props.song.title}</Text>
          <Text style={styles.artist}>{props.song.artist}</Text>
          </View>
          
          {/* <Ionicons style={styles.three_dot} name="ellipsis-vertical-outline" size={18} color="white" /> */}
      </View>
    </TouchableOpacity>

  )
}

export default Album_11;
