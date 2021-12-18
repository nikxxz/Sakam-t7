import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Box, Text} from 'react-native-design-utility';
import EmptyScreen from '../components/EmptyScreen';
import LoadingScreen from '../components/LoadingScreen';
import {theme} from '../constants/theme';
import Icon from 'react-native-vector-icons/Feather';
import {usePlayerContext} from '../contexts/PlayerContext';
import TrackPlayer from 'react-native-track-player';
import {supabase} from '../supabase/supabaseInit';
import SearchModal1 from '../components/components/SearchModal1';

const Search = () => {
  const playerContext = usePlayerContext();
  const [loading] = useState(false);
  const navigation = useNavigation();
  const [text, setText] = useState('');
  const [songs, setSongs] = useState(null);

  const onChangeText = (t: any) => {
    setText(t);
  };

  useEffect(() => {
    //getSearchList()
    getSearchList2();
  }, [text]);

  const getSearchList2 = async () => {
    if (text !== '') {
      let {data, error} = await supabase
        .from('Songs1')
        .select('*')
        .ilike('artist', '%' + text + '%');

      if (error) {
        console.log(error);
      }
      if (data) {
        //console.log(data)
        setSongs(data);
        // setListSong(data);
      }
    }
  };

  useEffect(() => {}, []);

  const artwork = async () => {
    const art = await TrackPlayer.getTrack(0);
  };

  return (
    <Box f={1} bg="#191919">
      <Box h={50} w="100%" px="sm" my="sm">
        <Box
          dir="row"
          align="center"
          h={40}
          bg="greyDarkest"
          radius={10}
          px="sm">
          <Box mr={18}>
            <Icon name="search" size={20} color={theme.color.greyLightest} />
          </Box>
          <TextInput
            style={styles.input}
            placeholder="Search Artist Or Songs"
            placeholderTextColor={theme.color.greyLightest}
            selectionColor={theme.color.greenLighter}
            onChangeText={onChangeText}
          />
        </Box>
      </Box>

      <SearchModal1 songs={songs} />

      {/* <FlatList
        keyboardShouldPersistTaps="never"
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={<>{!loading && <EmptyScreen />}</>}
        ListHeaderComponent={<>{loading && <LoadingScreen />}</>}
        data={Tracks}
        renderItem={({item: Tracks}) => (
          <Box h={90} dir="row" align="center" px="sm">
            <TouchableOpacity
              onPress={() => {
                if (playerContext.isPlaying || playerContext.isPaused) {
                  TrackPlayer.reset();
                }
                TrackPlayer.add(Tracks);
                TrackPlayer.play();
              }}>
              <Box
                h={70}
                w={70}
                bg="blueLight"
                radius={10}
                mr={10}
                style={{overflow: 'hidden'}}>
                <Image
                  source={{uri: Tracks.artwork, height: '100%', width: '100%'}}
                />
      </Box>
            </TouchableOpacity>
            <Box f={1}>
              <Text bold color="white">
                {Tracks.title}
              </Text>
              <Text size="xs" color="greyLightest">
                Album
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Artist', {data: Tracks})}>
                <Text size="xs" color={theme.color.greenLighter}>
                  {Tracks.artist}
                </Text>
              </TouchableOpacity>
            </Box>
          </Box>
        )}
        keyExtractor={item => String(item.id)}
      /> */}
    </Box>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    fontSize: theme.text.size.sm,
  },
  listContent: {
    paddingBottom: 90,
  },
});

export default Search;
