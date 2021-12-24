import React from 'react';
import {Dimensions, Image, TouchableOpacity} from 'react-native';
import {Box} from 'react-native-design-utility';

const {width} = Dimensions.get('screen');

export type AlbumProps = {
  song: any;
};

const Home_31 = (props: any) => {
  return (
    <TouchableOpacity onPress={() => {}} activeOpacity={1}>
      <Box
        style={{overflow: 'hidden'}}
        height={width * 0.5}
        radius={width * 0.025}>
        <Image
          source={{uri: props.songs.artwork, height: '100%', width: '100%'}}
        />
      </Box>
    </TouchableOpacity>
  );
};

export default Home_31;
