import React from 'react';
import {View, FlatList} from 'react-native';
import SearchModal11 from '../SearchModal11';

const SearchModal1 = (props: any) => {
  const {songs} = {...props};
  // const [ptracks, setptracks] = useState([]);

  if (songs == null) {
    return null;
  } else {
    //TrackPlayer.add(songs);
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
