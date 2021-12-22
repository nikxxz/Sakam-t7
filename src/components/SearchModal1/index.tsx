import React from 'react';
import {View, FlatList} from 'react-native';
import SearchModal11 from '../SearchModal11';
import {Box, Text} from 'react-native-design-utility';
import {theme} from '../../constants/theme';

const SearchModal1 = (props: any) => {
  const {songs} = {...props};
  // const [ptracks, setptracks] = useState([]);

  if (songs == null) {
    return (
      <View
        style={{
          marginBottom: 30,
          marginHorizontal: 5,
          alignItems: 'center',
          flex: 1,
          justifyContent: 'center',
          height: 50,
        }}>
        <Text bold color="white" mt={3}>
          Search for songs, artist...
        </Text>
      </View>
    );
  } else if (songs.length == 0) {
    return (
      <View
        style={{
          marginBottom: 30,
          marginHorizontal: 5,
          alignItems: 'center',
          flex: 1,
          justifyContent: 'center',
          height: 50,
        }}>
        <Text bold color={theme.color.redDark} mt={3}>
          Song, artist not found...
        </Text>
      </View>
    );
  }

  // useEffect(() => {
  //   //TrackPlayer.remove(ptracks)
  //   //setptracks(songs)
  // }, [songs]);
  return (
    <View style={{marginBottom: 30, marginHorizontal: 5}}>
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
