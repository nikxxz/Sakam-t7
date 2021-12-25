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

  useEffect(() => {
    const getd = async () => {
      const {data, error} = await supabase.rpc('get_playlist', {playlist_id:albumId});

      if (error) {
        console.log(error);
      }
      if (data) {
        setAlbum(data[0]);
      }
    };

    getd();
  }, []);

  if (!album) {
    return <LoadingScreen />;
  }

  return (
    <View>
      <Album_1 album={album} />
    </View>
  );
};

export default AlbumScreen;
