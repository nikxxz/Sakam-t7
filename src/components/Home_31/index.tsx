import React, {useEffect} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {Box} from 'react-native-design-utility';
export type AlbumProps = {
  song: any;
};

const Home_31 = (props: any) => {
  useEffect(() => {}, []);

  return (
    <TouchableOpacity onPress={() => {}} activeOpacity={1}>
      <Box style={{overflow: 'hidden'}} height={230} radius={10} mx={1}>
        <Image
          source={{uri: props.songs.artwork, height: '100%', width: '100%'}}
        />
      </Box>
    </TouchableOpacity>
  );
};

export default Home_31;
