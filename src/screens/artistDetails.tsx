import {useRoute} from '@react-navigation/native';
import React from 'react';
import {FlatList, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Box, Text} from 'react-native-design-utility';
import {theme} from '../constants/theme';
import {SearchStackParam} from '../constants/types';

type NavigationParams = RouteProp<SearchStackParam, 'Artist'>;

const ArtistDetails = () => {
  const {data} = useRoute<NavigationParams>().params ?? {};

  return (
    <Box f={1} bg="white">
      <FlatList
        ListHeaderComponent={
          <>
            <Box dir="row" px="sm" mt="sm" mb="md">
              <Box mr={18}>
                <Image
                  source={{
                    uri: 'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/imagealbumart/hor_hor_te.webp',
                  }}
                  style={styles.img}
                />
              </Box>
              <Box f={1}>
                <Text size="lg" bold>
                  {data}
                </Text>
                <Text size="s" color="grey">
                  Singer
                </Text>
                <Text size="md" color="grey">
                  Dumka, Jharkhand
                </Text>
              </Box>
            </Box>
            <Box px="sm" mb="md">
              <Text bold size="lg">
                Songs By {data}
              </Text>
            </Box>
          </>
        }
        data={[{id: '1'}, {id: '2'}, {id: 3}]}
        renderItem={() => (
          <TouchableOpacity>
            <Box px="sm" py="sm">
              <Text size="xs" color="grey">
                {data}
              </Text>
              <Text bold>Hor Hor Te</Text>
              <Text size="sm" color="grey" numberOfLines={1}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
                quasi, quibusdam harum similique ipsum laudantium fugiat unde
                dolor nisi nobis quis cumque temporibus eligendi incidunt?
              </Text>
            </Box>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 150,
    width: 150,
  },
});

export default ArtistDetails;
