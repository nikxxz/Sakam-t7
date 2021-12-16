import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {FlatList, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {Box, Text} from 'react-native-design-utility';
import EmptyScreen from '../components/EmptyScreen';
import LoadingScreen from '../components/LoadingScreen';
import {theme} from '../constants/theme';

const Search = () => {
  const [loading] = useState(false);
  const navigation = useNavigation();

  return (
    <Box f={1} bg="white">
      <Box h={50} w="100%" px="sm" mt="sm" mb="sm">
        <TextInput
          style={styles.input}
          placeholder="Search Artist Or Songs"
          selectionColor={theme.color.greenLighter}
        />
      </Box>

      <FlatList
        keyboardShouldPersistTaps="never"
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={<>{!loading && <EmptyScreen />}</>}
        ListHeaderComponent={<>{loading && <LoadingScreen />}</>}
        data={[{id: 1}, {id: 2}]}
        renderItem={() => (
          <Box h={90} dir="row" align="center" px="sm">
            <Box h={70} w={70} bg="blueLight" radius={10} mr={10} />
            <Box f={1}>
              <Text bold>Esel Kudi</Text>
              <Text size="xs" color="grey">
                Esel Kudi
              </Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Artist', {data: 'Tom Murmu'})
                }>
                <Text size="xs" color={theme.color.greenLighter}>
                  Tom Murmu
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
    height: 40,
    flex: 1,
    backgroundColor: theme.color.greyLightest,
    borderRadius: 10,
    paddingHorizontal: theme.space.sm,
    fontSize: theme.text.size.sm,
  },
  listContent: {
    paddingBottom: 90,
  },
});

export default Search;
