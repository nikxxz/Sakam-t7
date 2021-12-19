import React, {useEffect, useState} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Box, Text} from 'react-native-design-utility';
export type AlbumProps = {
  song: any;
};

const Home_31 = (props: any) => {
  useEffect(() => {}, []);

  return (
    <TouchableOpacity onPress={() => {}} activeOpacity={1}>
      <Box style={{overflow: 'hidden'}} height={230} radius={10} mx={1}>
        <Image
          source={{uri: props.songs.imageUri, height: '100%', width: '100%'}}
        />
        <Text color="white" size="md">
          {props.songs.title}
        </Text>
      </Box>
    </TouchableOpacity>
  );
};

export default Home_31;
