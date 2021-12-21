/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import SearchModal11 from '../SearchModal11';

const SearchModal1 = (props: any) => {
  const {songs} = {...props};
  const [ptracks, setptracks] = useState([]);

  if (songs == null) {
    return null;
  } else {
    //TrackPlayer.add(songs);
  }

  useEffect(() => {
    //TrackPlayer.remove(ptracks)
    //setptracks(songs)
  }, [songs]);
  return (
    <View style={{marginBottom: 30}}>
      <FlatList
        keyboardShouldPersistTaps="handled"
        data={songs}
        renderItem={({item, index}) => {
          return <SearchModal11 index={index + 1} song={item} tracks={songs} />;
        }}
        keyExtractor={item => item.id}
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        bounces={false}
      />
    </View>
  );
};

export default SearchModal1;

const styles = StyleSheet.create({
  headerSearch: {
    color: 'grey',
    alignItems: 'center',
    fontSize: 18,
    fontWeight: '300',
    paddingHorizontal: 10,
    // borderBottomColor:'grey',
    //borderBottomWidth:2
  },
  headerSearchSelected: {
    color: 'white',
    alignItems: 'center',
    fontSize: 18,
    fontWeight: '300',
    paddingHorizontal: 10,
    //borderBottomColor:'white',
    //borderBottomWidth:2
  },
});
