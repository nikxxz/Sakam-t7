import {RouteProp, useRoute} from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {FlatList, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Box, Text} from 'react-native-design-utility';
import {theme} from '../constants/theme';
import {SearchStackParam, AlbumParam} from '../constants/types';
import Icon from 'react-native-vector-icons/Feather';
import { supabase } from '../supabase/supabaseInit';

type NavigationParams = RouteProp<SearchStackParam, 'Artist'>;
type NavigationParama = RouteProp<AlbumParam, 'Artist'>;

const ArtistDetails = ({navigation}) => {
  const {data} = useRoute<NavigationParams>().params ?? {};
  const {song} = useRoute<NavigationParama>().params ?? {};

  const [asongs , setasongs] = useState();
  const [a , seta] = useState(data ? data.artist : song.artist)

  useEffect(()=>{

    const getArtistSongs = async ()=>{
      try {
        //let a = data.artist;
        console.log(a);

        let {data, error} = await supabase
          .from('Songs1')
          .select('*')
          .ilike('artist', a);
         
          //console.log(data)
          setasongs(data)
        if (data) {
           setasongs(data);
        } else {
          setasongs([]);
        }
        if (error) {
          console.log(error);
        }
      } catch (e) {
        console.log(e);
      }
    }

    getArtistSongs();
  },[])


  
  return (
    <Box f={1} bg="#212121">
      <FlatList
        ListHeaderComponent={
          <>
            <Box dir="row" px="sm" mt="sm" mb="md" style={{overflow: 'hidden'}}>
              <Box mr={18}>
                <Image
                  source={{
                    uri: data ? data.artwork : song.artwork,
                  }}
                  style={styles.img}
                />
              </Box>
              <Box f={1}>
                <Text size="lg" bold color="white">
                  {data ? data.title : song.title}
                </Text>
                <Text size="sm" color="greyLighter">
                  {data ? data.artist : song.artist}
                </Text>
                <Text size="sm" color="greyLighter">
                  Dumka, Jharkhand
                </Text>

                <TouchableOpacity>
                  <Box width={'100%'} py="xs" ml="xs" dir="row" align="center">
                    <Icon
                      name="facebook"
                      size={14}
                      color={theme.color.blueLighter}
                    />
                    <Text size="xs" ml={3} color={theme.color.greyLighter}>
                      facebook
                    </Text>
                  </Box>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Box width={'100%'} py="5" ml="xs" dir="row" align="center">
                    <Icon
                      name="instagram"
                      size={14}
                      color={theme.color.redLight}
                    />
                    <Text size="xs" ml={3} color={theme.color.greyLighter}>
                      instagram
                    </Text>
                  </Box>
                </TouchableOpacity>
              </Box>
            </Box>
            <Box px="sm" mb="md">
              <Text bold size="lg" color="greyLighter">
                Songs By {data ? data.artist : song.artist}
              </Text>
            </Box>
          </>
        }
        data={asongs}
        renderItem={({item}) => (
          <TouchableOpacity>
            <Box px="sm" py="sm">
              <Text size="xs" color="greyLighter">
                {/* {item ? item.artist : song.artist} */}
                {item.artist}
              </Text>
              <Text bold color="greenLighter">
                {/* {item ? item.title : song.title} */}
                {item.title}
              </Text>
              {/* <Text size="sm" color="grey" numberOfLines={1}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
                quasi, quibusdam harum similique ipsum laudantium fugiat unde
                dolor nisi nobis quis cumque temporibus eligendi incidunt?
              </Text> */}
            </Box>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 150,
    width: 150,
  },
});

export default ArtistDetails;
