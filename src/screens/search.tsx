import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
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
import Tracks from '../constants/Tracks';

const Search = () => {
  const playerContext = usePlayerContext();
  const [loading] = useState(false);
  const navigation = useNavigation();

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
          />
        </Box>
      </Box>

      <FlatList
        keyboardShouldPersistTaps="never"
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={<>{!loading && <EmptyScreen />}</>}
        ListHeaderComponent={<>{loading && <LoadingScreen />}</>}
        data={Tracks}
        renderItem={({item: Tracks}) => (
          <Box h={90} dir="row" align="center" px="sm">
            <TouchableOpacity
              onPress={() => {
                playerContext.play();
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
      />
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
