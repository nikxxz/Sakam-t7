import React from 'react';
import {FlatList} from 'react-native';
import Album_12 from '../Album_12';
import Album_11 from '../Album_11';
import {Box} from 'react-native-design-utility';
import LinearGradient from 'react-native-linear-gradient';

export type AlbumCategoryProps = {
  album: any;
};

const Album_1 = (props: AlbumCategoryProps) => {
  return (
    <LinearGradient
      colors={['#212121', '#1D263B', '#212121']}
      start={{x: 0.3, y: 0.2}}>
      <Box pt={10}>
        <FlatList
          data={props.album.songs}
          renderItem={({item, index}) => (
            <Album_11
              index={index + 1}
              song={item}
              tracks={props.album.songs}
            />
          )}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={() => (
            <Album_12 album={props.album} tracks={props.album.songs} />
          )}
        />
      </Box>
    </LinearGradient>
  );
};

export default Album_1;
