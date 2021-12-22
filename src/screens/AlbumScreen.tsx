import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useRoute} from '@react-navigation/native';

import Album_1 from '../components/Album_1';
import {supabase} from '../supabase/supabaseInit';
import LoadingScreen from '../components/LoadingScreen';

const AlbumScreen = () => {
  const route = useRoute();
  const albumId = route.params.id;

  const [album, setAlbum] = useState(null);
  // const [songs, setSongs] = useState(null);

  useEffect(() => {
    const getd = async () => {
      let {data, error} = await supabase
        .from('Playlist1')
        .select('*')
        .eq('id', albumId);
      //559b6ab5-fcce-4ca8-910e-50f5236da417

      if (error) {
        console.log(error);
      }
      if (data) {
        // console.log(data);
        setAlbum(data[0]);
      }
    };

    getd();
    //setAlbum(albumDetails);
  }, []);

  if (!album) {
    // return <Text style={{color:'white'}}>Loading...</Text>
    return <LoadingScreen />;
  }

  return (
    <View>
      <Album_1 album={album} />
    </View>
  );
};

export default AlbumScreen;
