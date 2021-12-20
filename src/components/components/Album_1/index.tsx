import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';

import styles from './styles';
import Album_12 from '../Album_12';
import Album_11 from '../Album_11';
import { Box } from 'react-native-design-utility';

export type AlbumCategoryProps = {
  title: string;
  albums: any;
  albumart: string;
};

const Album_1 = (props: AlbumCategoryProps) => {
  //console.log(props);

  //const { setListSong } = useContext(AppContext);
  useEffect(() => {
    //setListSong(props.album.songs)
  }, []);

  return (
    <Box backgroundColor="#191919">
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
