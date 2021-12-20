import React, {useContext, useEffect} from 'react';
import {
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {Text, Box} from 'react-native-design-utility';
import TrackPlayer from 'react-native-track-player';
import {theme} from '../../../constants/theme';
import {usePlayerContext} from '../../../contexts/PlayerContext';

export type AlbumProps = {
  song: any;
};

// const song_data = {
//   id:'1',
//   uri:'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/audio-low/Y2Mate.is - AAM GI SARI  NEW SANTHALI VIDEO SONG 2020-2021-c9oHoSK6HaY-160k-1637471891514.mp3',
//   imageUri:'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/imagealbumart/am_gi_sari.webp',
//   title:'Am gi sari',
//   artist:'Dingra Boyz'

// }

// const songlist_1 = [
//   {
//     id: '11',
//     title: 'Sari Sari Aam ',
//     uri: 'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/audio-low/Y2Mate.is - Sari Sari Aam-zwehf--Nwe8-160k-1637598704911.mp3',
//     imageUri:
//       'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/imagealbumart/sare_sare_aam.jpg',
//     artist: 'Shivendra Murmu',
//   },
//   {
//     id: '12',
//     title: 'Inren Gati',
//     uri: 'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/audio-low/Inren Gaati - Lyrical _ Tom Murmu-TKBAP1IOdDg.webm',
//     imageUri:
//       'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/imagealbumart/inren_gati.jpg',
//     artist: 'Tom Murmu',
//   },
//   {
//     id: '13',
//     title: 'Toke Chahe Re Dil',
//     uri: 'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/audio-low/Y2Mate.is - Toke Chahe Re Dil  A Violent Love Story  Nagpuri Song Priyanka Kishore-Ashish Tigga-Vivek Nayak-7dmPrhxt4no-160k-1637599107504.mp3',
//     imageUri:
//       'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/imagealbumart/toke_chahe_re_dil.jpg',
//     artist: 'Vivek Nayak',
//   },
//   {
//     id: '14',
//     title: 'Dular Baha',
//     uri: "https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/audio-low/Dular Baha _ Cak' Cando  _ Santhali Song  _ Shiva Music Hamar Jharkhand-7u_loVLA3-g.webm",
//     imageUri:
//       'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/imagealbumart/dingraBoyz.jpg',
//     artist: 'Cak cando',
//   },
//   {
//     id: '15',
//     title: 'Am Gi Sari',
//     uri: 'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/audio-low/Y2Mate.is - AAM GI SARI  NEW SANTHALI VIDEO SONG 2020-2021-c9oHoSK6HaY-160k-1637471891514.mp3',
//     imageUri:
//       'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/imagealbumart/am_gi_sari.webp',
//     artist: 'Dingra Boyz',
//   },
//   {
//     id: '16',
//     title: 'Khojo Na Mai guya',
//     uri: 'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/audio-low/Y2Mate.is - KHOJO NA MOI GUIYA GUIYA RE-iaiZD4jVjt0-160k-1637599329232.mp3',
//     imageUri:
//       'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/imagealbumart/khojo_na_mai_guya_guya_re.jpg',
//     artist: 'Morning Star',
//   },
//   {
//     id: '17',
//     title: 'Kan kar Bali',
//     uri: 'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/audio-low/Y2Mate.is - Kaan Kar Baali-BXAUqQ3pirk-160k-1637599034083.mp3',
//     imageUri:
//       'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/imagealbumart/Kan_kar_bali.jpg',
//     artist: 'Tom Murmu',
//   },
//   {
//     id: '18',
//     title: 'Hor Hor Te',
//     uri: 'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/audio-low/HOR HOR TE - Tom Murmu.webm',
//     imageUri:
//       'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/imagealbumart/hor_hor_te.webp',
//     artist: 'Tom Murmu',
//   },
// ];
const Album_11 = (props: any) => {
  const navigation = useNavigation();
  const {song, index} = props;
  const playerContext = usePlayerContext();
  return (
    <Box h={90} dir="row" align="center" px="sm">
      <TouchableOpacity
        onPress={async () => {
          //await TrackPlayer.reset()
          //console.log(tracks)
          //await TrackPlayer.add(tracks)
          if (playerContext.isPlaying) {
            await TrackPlayer.skip(index - 1);
          } else {
            await TrackPlayer.skip(index - 1);
            await TrackPlayer.play();
          }
          // onPlay();
        }}>
        <Box dir="row">
          <Box f={1} height={100}>
            <Box
              h={70}
              w={70}
              bg="blueLight"
              radius={10}
              mr={10}
              style={{overflow: 'hidden'}}>
              <Image
                source={{uri: song.artwork, height: '100%', width: '100%'}}
              />
            </Box>
          </Box>
          <Box f={3} height={100}>
            <Box f={1} width={200} ml={85}>
              <Text bold color="white">
                {song.title}
              </Text>
              <Text size="xs" color="greyLightest">
                Album
              </Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ArtistScreen', {data: song})
                }>
                <Text size="xs" color={theme.color.greenLighter}>
                  {song.artist}
                </Text>
              </TouchableOpacity>
            </Box>
          </Box>
        </Box>
      </TouchableOpacity>
    </Box>
  );
};

export default Album_11;
