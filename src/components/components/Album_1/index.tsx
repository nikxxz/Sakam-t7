import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import Album_12 from '../Album_12';
import Album_11 from '../Album_11';
import {Box} from 'react-native-design-utility';
import TrackPlayer from 'react-native-track-player';

export type AlbumCategoryProps = {
  title: string;
  album: any;
  albumart: string;
};

const Album_1 = (props: AlbumCategoryProps) => {
  //const { setListSong } = useContext(AppContext);
  useEffect(() => {
    //setListSong(props.album.songs)
    const t = async () => {
      //await TrackPlayer.reset()
      await TrackPlayer.add(props.album.songs, 0);
    };

    t();
  }, []);

  return (
    <Box backgroundColor="#191919" pt={10}>
      <FlatList
        data={props.album.songs}
        renderItem={({item, index}) => (
          <Album_11 index={index + 1} song={item} />
        )}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={() => <Album_12 album={props.album} />}
      />
    </Box>
  );
};

export default Album_1;
