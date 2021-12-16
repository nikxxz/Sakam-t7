import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {Box} from 'react-native-design-utility';
import {theme} from '../constants/theme';
import KeyboardDismiss from './KeyboardDismiss';

const Search = () => {
  return (
    <KeyboardDismiss>
      <Box f={1} bg="white">
        <Box h={50} w="100%" px="sm" mt="sm">
          <TextInput
            style={styles.input}
            placeholder="Search Artist Or Songs"
            selectionColor={theme.color.greenLighter}
          />
        </Box>
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
});

export default Search;
