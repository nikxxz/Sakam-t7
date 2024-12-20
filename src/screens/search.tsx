import React, {useEffect, useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {Box} from 'react-native-design-utility';
import {theme} from '../constants/theme';
import Icon from 'react-native-vector-icons/Feather';
import {supabase} from '../supabase/supabaseInit';
import SearchModal1 from '../components/SearchModal1';

const Search = () => {
  const [text, setText] = useState('');
  const [songs, setSongs] = useState(null);

  const onChangeText = (t: any) => {
    setText(t);
  };

  useEffect(() => {
    getSearchList2();
  }, [text, songs]);

  const getSearchList2 = async () => {
    if (text === '') {
      setSongs(null);
    }
    if (text !== '') {
      const {data, error} = await supabase.rpc('search_main', {
        p_pattern: text,
      });

      if (error) {
        console.log(error);
      }
      if (data) {
        setSongs(data);
      }
    }
  };

  // const artwork = async () => {
  //   const art = await TrackPlayer.getTrack(0);
  // };

  return (
    <Box f={1} bg="#191919">
      <Box h={45} w="100%" px="sm" my="sm" mb={10}>
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
            placeholder="Search For Artists, Songs"
            placeholderTextColor={'grey'}
            selectionColor={theme.color.greenLighter}
            onChangeText={onChangeText}
          />
        </Box>
      </Box>

      <SearchModal1 songs={songs} />
    </Box>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    fontSize: theme.text.size.sm,
    color: 'white',
  },
  listContent: {
    paddingBottom: 90,
  },
});

export default Search;
