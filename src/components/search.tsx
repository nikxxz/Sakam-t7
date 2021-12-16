import React from 'react';
import {FlatList, StyleSheet, TextInput} from 'react-native';
import {Box, Text} from 'react-native-design-utility';
import {theme} from '../constants/theme';
import KeyboardDismiss from './KeyboardDismiss';

const Search = () => {
  return (
    <KeyboardDismiss>
      <Box f={1} bg="white">
        <Box h={50} w="100%" px="sm" mt="sm" mb="sm">
          <TextInput
            style={styles.input}
            placeholder="Search Artist Or Songs"
            selectionColor={theme.color.greenLighter}
          />
        </Box>

        <FlatList
          style={styles.list}
          data={[{id: 1}, {id: 2}]}
          renderItem={() => (
            <Box h={90} dir="row" align="center" px="sm">
              <Box h={70} w={70} bg="blueLight" radius={10} mr={10} />
              <Box>
                <Text bold>Tom Murmu</Text>
                <Text size="xs" color="grey">
                  Subtitle
                </Text>
                <Text size="xs" color="blueLight">
                  42 episodes
                </Text>
              </Box>
            </Box>
          )}
          keyExtractor={item => String(item.id)}
        />
      </Box>
    </KeyboardDismiss>
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
  list: {
    minHeight: '100%',
  },
});

export default Search;
