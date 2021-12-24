import React from 'react';
import {Dimensions} from 'react-native';
import {Box} from 'react-native-design-utility';
import Carousel from 'react-native-snap-carousel';
import Home_31 from '../Home_31';

const {height, width} = Dimensions.get('window');

export default SB2 = props => {
  const _renderItem = ({item, i}) => {
    return (
      <Box width="100%">
        {/* <FlatList
          data={item}
          renderItem={({item, index}) => <Home_31 song={item} />}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
        /> */}
        {/* <Home_31 songs={item.songs[0]} />
        <Home_31 songs={item.songs[1]} />
        <Home_31 songs={item.songs[2]} />
        <Home_31 songs={item.songs[3]} /> */}
        <Home_31 songs={item} />
      </Box>
    );
  };

  return (
    <Box mt={width * 0.05} mb={width * 0.035}>
      <Box align="center" justify="center" f={1} ml={width * 0.001}>
        <Carousel
          activeSlideAlignment={'center'}
          loop={true}
          autoplay={true}
          data={props.songs}
          sliderWidth={width}
          itemWidth={width * 0.95}
          itemHeight={height}
          renderItem={_renderItem}
          autoplayInterval={5000}
        />
      </Box>
    </Box>
  );
};
