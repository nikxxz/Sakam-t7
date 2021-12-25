import React from 'react';
import {View, FlatList, StyleSheet, Dimensions} from 'react-native';
import SearchModal11 from '../SearchModal11';
import {Text} from 'react-native-design-utility';

const {width} = Dimensions.get('screen');

const SearchModal1 = (props: any) => {
  const {songs} = {...props};

  if (songs == null) {
    return (
      <View style={styles.empty}>
        <Text bold color="#4EB885" size={width * 0.035}>
          Search For Songs or Artists
        </Text>
      </View>
    );
  } else if (songs.length === 0) {
    return (
      <View style={styles.notFound}>
        <Text bold color="#FF6663" size={width * 0.035}>
          Song or Artist Not Found
        </Text>
      </View>
    );
  }
  return (
    <View style={styles.list}>
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
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notFound: {
    marginBottom: 30,
    marginHorizontal: 5,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    height: 50,
  },
  list: {
    marginBottom: 80,
    marginHorizontal: 5,
  },
});
