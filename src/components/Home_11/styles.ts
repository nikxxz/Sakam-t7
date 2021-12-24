import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    width: width * 0.35,
    marginHorizontal: width * 0.035,
    marginVertical: width * 0.035,
  },
  image: {
    width: '100%',
    height: width * 0.35,
    borderRadius: 15,
  },
  text: {
    textAlign: 'center',
    color: '#AAA9A9',
    textTransform: 'capitalize',
    marginTop: 10,
  },
});

export default styles;
