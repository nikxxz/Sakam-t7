import {useRoute} from '@react-navigation/native';
import React from 'react';
import {FlatList, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Box, Text} from 'react-native-design-utility';
import {theme} from '../constants/theme';
import {SearchStackParam} from '../constants/types';
import Icon from 'react-native-vector-icons/Feather';

type NavigationParams = RouteProp<SearchStackParam, 'Artist'>;

const ArtistDetails = () => {
  const {data} = useRoute<NavigationParams>().params ?? {};

  return (
    <Box f={1} bg="#191919">
      <FlatList
        ListHeaderComponent={
          <>
            <Box dir="row" px="sm" mt="sm" mb="md" style={{overflow: 'hidden'}}>
              <Box mr={18}>
                <Image
                  source={{
                    uri: data.artwork,
                  }}
                  style={styles.img}
                />
              </Box>
              <Box f={1}>
                <Text size="lg" bold color="white">
                  {data.title}
                </Text>
                <Text size="sm" color="greyLighter">
                  {data.artist}
                </Text>
                <Text size="sm" color="greyLighter">
                  Dumka, Jharkhand
                </Text>

                <TouchableOpacity>
                  <Box width={'100%'} py="xs" ml="xs" dir="row" align="center">
                    <Icon
                      name="facebook"
                      size={14}
                      color={theme.color.blueLighter}
                    />
                    <Text size="xs" ml={3} color={theme.color.greyLighter}>
                      facebook
                    </Text>
                  </Box>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Box width={'100%'} py="5" ml="xs" dir="row" align="center">
                    <Icon
                      name="instagram"
                      size={14}
                      color={theme.color.redLight}
                    />
                    <Text size="xs" ml={3} color={theme.color.greyLighter}>
                      instagram
                    </Text>
                  </Box>
                </TouchableOpacity>
              </Box>
            </Box>
            <Box px="sm" mb="md">
              <Text bold size="lg" color="greyLighter">
                Songs By {data.artist}
              </Text>
            </Box>
          </>
        }
        data={[{id: '1'}, {id: '2'}, {id: 3}]}
        renderItem={() => (
          <TouchableOpacity>
            <Box px="sm" py="sm">
              <Text size="xs" color="greyLighter">
                {data.artist}
              </Text>
              <Text bold color="greenLighter">
                {data.title}
              </Text>
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
